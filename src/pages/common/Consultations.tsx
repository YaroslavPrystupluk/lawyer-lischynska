import { FC } from "react";
import SEOHelper from "../../SEOHelpers/SEOHelper.tsx";

const siteUrl = "https://advocate-lishchynska.rivne.ua/services/consultations"

const Consultations: FC = () => {
  return (
    <>
        <SEOHelper
            title="Юридичні консультації - Адвокат Тетяна Ліщинська"
            description="Отримайте професійні консультації адвоката Тетяни Ліщинської у Рівному — допомога у різних юридичних питаннях"
            keywords="адвокат консультації, юридичні консультації, правові консультації"
            url={siteUrl}
            image={`${siteUrl}/images/og-image.png`}
        />
      <p>Consultations</p>
    </>
  );
};

export default Consultations;
