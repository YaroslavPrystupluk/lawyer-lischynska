import { FC } from "react";
import CardMyExpertise from "../../components/ContactInfo/CardMyExpertise/CardMyExpertise.tsx";
import SEOHelper from "../../SEOHelpers/SEOHelper.tsx";
import { homeFaqSchema, legalServiceSchema } from "../../SEOHelpers/seoData.ts";
// import StatisticsCount from "../../components/StatisticsCount/StatisticsCount.tsx";

const siteUrl = "https://advocate-lishchynska.rivne.ua";

const Home: FC = () => {
  return (
    <>
      <SEOHelper
        title="Адвокат Ліщинська — Юридичні послуги у Рівному"
        description="Адвокатське бюро Ліщинської. Юридичні консультації, представництво в суді, захист інтересів."
        keywords="адвокат Рівне, юридичні послуги Рівне, адвокатські консультації"
        url={siteUrl}
        image={`${siteUrl}/images/og-image.png`}
        jsonLdData={[legalServiceSchema, homeFaqSchema]}
      />
      <CardMyExpertise />
      {/* <StatisticsCount/> */}
    </>
  );
};

export default Home;
