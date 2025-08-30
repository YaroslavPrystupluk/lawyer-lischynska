// src/components/AppMap/AppMap.tsx
import React, { FC, useCallback, useMemo, useRef, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const MAP_SCRIPT_ID = "google-map-script";
const STATIC_LIBS = ["marker"] as const;

type LatLngLiteral = google.maps.LatLngLiteral;

export type AppMapProps = {
  center: LatLngLiteral;
  zoom?: number;
  className?: string;
  mapId?: string; // бажано векторний mapId для advanced markers
  options?: google.maps.MapOptions;
  children?: React.ReactNode;
  onMapReady?: (map: google.maps.Map) => void; // доступ до map як у документації (через onLoad)
  libraries?: string[]; // можна будь-які, 'marker' додамо автоматично
  showCenterMarker?: boolean;
  markerPosition?: LatLngLiteral;
  usePin?: boolean; // використати PinElement для кастомного піна
  markerLabel?: string; // текст/літера для піна
};

const DEFAULT_OPTIONS: google.maps.MapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  fullscreenControl: false,
  mapTypeControl: false,
  streetViewControl: false,
  gestureHandling: "greedy",
};

const AppMap: FC<AppMapProps> = ({
  center,
  zoom = 12,
  mapId,
  options,
  children,
  onMapReady,
  libraries,
  showCenterMarker = true,
  markerPosition,
  usePin = false,
  markerLabel = "Here",
}) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY as string | undefined;

  const libs = useMemo(() => {
    if (!libraries) return STATIC_LIBS as unknown as string[];
    return Array.from(new Set<string>(["marker", ...libraries]));
  }, [libraries]);

  const loaderOptions = useMemo(
    () => ({
      id: MAP_SCRIPT_ID,
      googleMapsApiKey: apiKey as string,
      libraries: libs as unknown as ("places" | "geometry" | "visualization")[],
      version: "weekly",
    }),
    [apiKey, libs]
  );

  const { isLoaded, loadError } = useJsApiLoader(loaderOptions);

  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(
    null
  );

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      mapRef.current = map;
      map.setCenter(center);
      map.setZoom(zoom);
      onMapReady?.(map); // <-- як у документації: доступ до map у колбеку
    },
    [center, zoom, onMapReady]
  );

  const onUnmount = useCallback(() => {
    if (markerRef.current) {
      markerRef.current.map = null;
      markerRef.current = null;
    }
    mapRef.current = null;
  }, []);

  const mergedOptions = useMemo<google.maps.MapOptions>(
    () => ({ ...DEFAULT_OPTIONS, ...options, mapId }),
    [options, mapId]
  );

  // Створюємо/оновлюємо AdvancedMarkerElement після завантаження API і ініціалізації карти
  useEffect(() => {
    if (!isLoaded || !mapRef.current) return;

    let cancelled = false;

    (async () => {
      const markerLib = (await google.maps.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;
      if (cancelled) return;

      const { AdvancedMarkerElement, PinElement } = markerLib;
      if (!AdvancedMarkerElement) {
        console.error(
          "[AppMap] AdvancedMarkerElement недоступний. Перевір 'marker' бібліотеку."
        );
        return;
      }

      const shouldShow = showCenterMarker || !!markerPosition;
      if (!shouldShow) {
        if (markerRef.current) {
          markerRef.current.map = null;
          markerRef.current = null;
        }
        return;
      }

      const position = markerPosition ?? center;

      // Контент піна (за бажанням через PinElement)
      let content: HTMLElement | undefined;
      if (usePin && PinElement) {
        const pin = new PinElement({
          scale: 1.1,
          glyph: markerLabel?.charAt(0) ?? "📍",
          glyphColor: "#ffffff",
          background: "#2563eb",
          borderColor: "#1e40af",
        });
        content = pin.element;
      }

      if (!markerRef.current) {
        markerRef.current = new AdvancedMarkerElement({
          map: mapRef.current!,
          position,
          title: markerLabel,
          ...(content ? { content } : {}),
          gmpClickable: true,
        });
      } else {
        markerRef.current.position = position;
        if (content) markerRef.current.content = content;
        if (!markerRef.current.map) markerRef.current.map = mapRef.current!;
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [isLoaded, center, markerPosition, showCenterMarker, usePin, markerLabel]);

  if (!apiKey) {
    return (
      <div className="w-full h-full">
        <div className="p-4 rounded-lg bg-red-50 text-red-700 border border-red-200">
          Не знайдено ключ Google Maps
        </div>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="w-full h-full">
        <div className="p-4 rounded-lg bg-orange-50 text-orange-700 border border-orange-200">
          Помилка Maps: {String(loadError)}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      {!isLoaded ? (
        <div className="w-full h-full rounded-2xl animate-pulse bg-gray-100" />
      ) : (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }} // контейнер ЗОБОВ'ЯЗАНО має мати висоту через className
          center={center}
          zoom={zoom}
          options={mergedOptions}
          onLoad={onLoad} // <-- як у документації
          onUnmount={onUnmount} // <-- cleanup
        >
          {children}
        </GoogleMap>
      )}
    </div>
  );
};

export default React.memo(AppMap);
