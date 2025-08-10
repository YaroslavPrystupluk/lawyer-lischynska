import { FC } from "react";
import SEOHelper from "../../SEOHelpers/SEOHelper.tsx";

const siteUrl = "https://advocate-lishchynska.rivne.ua/services/support";

const Support: FC = () => {
  return (
    <>
        <SEOHelper
            title="Юридична підтримка - Адвокатське бюро Тетяни Ліщинської"
            description="Професійна юридична підтримка у Рівному: консультації, захист прав, супровід справ від адвоката з багаторічним досвідом."
            keywords="юридична підтримка, адвокат Рівне, правова допомога, консультації адвоката, захист прав, адвокатське бюро"
            url={siteUrl}
            image={`${siteUrl}/images/og-image.jpg`}
        />

      <p>Support</p>
    </>
  );
};

export default Support;
