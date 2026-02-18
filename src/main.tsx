import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {HelmetProvider} from "react-helmet-async";
import AppRouter from "./routes/AppRouter";
import JsonLd from "./components/SEO/JsonLd.tsx";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"

import "./firebase/firebaseConfig";
import "./index.css";
import {NotificationProvider} from "./context/NotificationProvider.tsx";



const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <NotificationProvider>
        <QueryClientProvider client={queryClient}>
        <HelmetProvider>
            <JsonLd/>
            <AppRouter/>
        </HelmetProvider>
        </QueryClientProvider>
        </NotificationProvider>
    </StrictMode>
);
