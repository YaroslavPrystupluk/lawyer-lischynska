import { FC } from "react";
import SEOHelper from "../../SEOHelpers/SEOHelper.tsx";

const siteUrl =  "https://advocate-lishchynska.rivne.ua/blog"

const Blog: FC = () => {
  return (
    <>
        <SEOHelper
            title="Блог — Адвокат Ліщинська"
            description="Корисні статті та поради з права від адвоката Ліщинської."
            keywords="адвокат блог, юридичні статті, правова допомога"
            url={siteUrl}
            image={`${siteUrl}/images/og-image.png`}
        />

      <p>Blog</p>
    </>
  );
};

export default Blog;
