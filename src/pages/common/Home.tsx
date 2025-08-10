import { FC } from "react";
import CardMyExpertise from "../../components/CardMyExpertise/CardMyExpertise.tsx";
import SEOHelper from "../../SEOHelpers/SEOHelper.tsx";
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
            image={`${siteUrl}/images/og-image.jpg`}
        />
      <CardMyExpertise />
      {/* <StatisticsCount/> */}
    </>
  );
};

export default Home;
