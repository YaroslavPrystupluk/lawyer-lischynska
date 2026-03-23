import { Helmet } from "react-helmet-async";
import { FC } from "react";

type ISEOHelperProps = {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image: string;
  ogType?: "website" | "article"; // ← було завжди "website"
  noIndex?: boolean; // ← для адмін-сторінок
  jsonLdData?: object | object[]; // ← замінив any на object
};

const SEOHelper: FC<ISEOHelperProps> = ({
  title,
  description,
  keywords,
  url,
  image,
  ogType = "website",
  noIndex = false,
  jsonLdData,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:locale" content="uk_UA" />
      <meta property="og:site_name" content="Адвокат Ліщинська" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* JSON-LD тепер всередині Helmet — потрапляє в <head> ✅ */}
      {jsonLdData && (
        <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
      )}
    </Helmet>
  );
};

export default SEOHelper;
