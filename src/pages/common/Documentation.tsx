import { FC } from "react";
import SEOHelper from "../../SEOHelpers/SEOHelper.tsx";

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
    </>
  );
};

export default Documentation;
