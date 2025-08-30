import { FC } from "react";
import SEOHelper from "../../SEOHelpers/SEOHelper.tsx";
import AppMap from "../../components/AppMap/AppMap.tsx";

const siteUrl = "https://advocate-lishchynska.rivne.ua/services/documentation";

const Documentation: FC = () => {
  return (
    <>
      <SEOHelper
        title="Документальне супроводження - Адвокатське бюро Тетяни Ліщинської"
        description="Професійні юридичні послуги з оформлення та перевірки документів у Рівному."
        keywords="юридичні послуги, документальне супроводження, адвокатське бюро Рівне, оформлення документів, перевірка документів, консультація юриста, правова допомога, адвокат Тетяна Ліщинська"
        url={siteUrl}
        image={`${siteUrl}/images/og-image.png`}
      />

      <p>Documentation</p>

      <section className="w-full">
        <div className="w-full h-[56vh] md:h-[480px] rounded-2xl overflow-hidden shadow">
          <AppMap
            center={{ lat: 50.64017349023539, lng: 26.199210758021827 }}
            zoom={18}
            options={{ clickableIcons: false }}
            showCenterMarker
            usePin
            markerLabel="L"
          />
        </div>
      </section>
    </>
  );
};

export default Documentation;
