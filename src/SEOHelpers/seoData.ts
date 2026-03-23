// src/SEOHelpers/seoData.ts
// Готові JSON-LD схеми для кожної сторінки
// Використання: import { legalServiceSchema } from "../SEOHelpers/seoData"
//               <SEOHelper jsonLdData={legalServiceSchema} ... />

const SITE_URL = "https://advocate-lishchynska.rivne.ua";
const PHONE    = "+380982592599";

const ADDRESS = {
  "@type":         "PostalAddress",
  streetAddress:   "вул. Корольова, 15",
  addressLocality: "Рівне",
  postalCode:      "33030",
  addressCountry:  "UA",
};

const GEO = {
  "@type":    "GeoCoordinates",
  latitude:   50.6199,
  longitude:  26.2516,
};

const PUBLISHER = {
  "@type": "Organization",
  name:    "Адвокат Ліщинська",
  logo: {
    "@type": "ImageObject",
    url:     `${SITE_URL}/logo.png`,
  },
};

// ── Головна (Home) ────────────────────────────────────────
// Передай як масив: jsonLdData={[legalServiceSchema, homeFaqSchema]}
export const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type":    "LegalService",
  "@id":      SITE_URL,
  name:       "Адвокат Ліщинська",
  image:      `${SITE_URL}/logo.png`,
  url:        SITE_URL,
  telephone:  PHONE,
  priceRange: "$$",
  address:    ADDRESS,
  geo:        GEO,
  openingHoursSpecification: [{
    "@type":     "OpeningHoursSpecification",
    dayOfWeek:   ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    opens:       "08:00",
    closes:      "17:00",
  }],
  sameAs: ["https://www.instagram.com/advocate_lishchynska_tetiana/"],
  description:
    "Адвокат у Рівному — юридичні послуги, консультації, захист у суді. " +
    "Сімейні, цивільні, земельні, житлові справи, реєстрація бізнесу, " +
    "стягнення боргу, спадщина, розробка договорів, аліменти, " +
    "розірвання шлюбу, поділ майна, ДТП. Тетяна Ліщинська.",
};

export const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name:    "Скільки коштує консультація адвоката?",
      acceptedAnswer: {
        "@type": "Answer",
        text:    "Вартість залежить від складності питання. Зверніться для уточнення деталей.",
      },
    },
    {
      "@type": "Question",
      name:    "Які справи веде адвокат Ліщинська?",
      acceptedAnswer: {
        "@type": "Answer",
        text:    "Сімейні, цивільні, земельні, житлові справи, реєстрація бізнесу, стягнення боргу, спадщина, ДТП.",
      },
    },
    {
      "@type": "Question",
      name:    "Де знаходиться офіс?",
      acceptedAnswer: {
        "@type": "Answer",
        text:    "м. Рівне, вул. Корольова, 15. Пн–Пт 08:00–17:00.",
      },
    },
  ],
};

// ── Про себе (About) ──────────────────────────────────────
export const aboutPersonSchema = {
  "@context": "https://schema.org",
  "@type":    "Person",
  name:       "Тетяна Ліщинська",
  jobTitle:   "Адвокат",
  url:        `${SITE_URL}/about`,
  telephone:  PHONE,
  address:    ADDRESS,
  sameAs:     ["https://www.instagram.com/advocate_lishchynska_tetiana/"],
  worksFor: {
    "@type": "LegalService",
    name:    "Адвокатське бюро «Тетяни Ліщинської»",
    url:     SITE_URL,
  },
  description:
    "Адвокат з 14-річним юридичним досвідом. " +
    "Керуюча Адвокатського бюро «Тетяни Ліщинської» з липня 2025 року.",
};

// ── Контакти (Contacts) ───────────────────────────────────
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type":    "ContactPage",
  name:       "Контакти — Адвокат Ліщинська",
  url:        `${SITE_URL}/contacts`,
  mainEntity: {
    "@type":    "LegalService",
    name:       "Адвокат Ліщинська",
    telephone:  PHONE,
    address:    ADDRESS,
    geo:        GEO,
  },
};

// ── Блог (Blog) ───────────────────────────────────────────
export const blogListSchema = {
  "@context":  "https://schema.org",
  "@type":     "Blog",
  name:        "Блог — Адвокат Ліщинська",
  url:         `${SITE_URL}/blog`,
  description: "Юридичні статті та поради від адвоката Тетяни Ліщинської.",
  author: {
    "@type": "Person",
    name:    "Тетяна Ліщинська",
  },
};

// ── Окрема стаття (Post) ──────────────────────────────────
// Виклик: buildArticleSchema({ title, description, slug, datePublished, ... })
export const buildArticleSchema = ({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image,
}: {
  title:         string;
  description:   string;
  slug:          string;
  datePublished: string;
  dateModified?: string;
  image?:        string;
}) => ({
  "@context":   "https://schema.org",
  "@type":      "BlogPosting",
  headline:     title,
  description,
  image:        image || `${SITE_URL}/og-image.jpg`,
  datePublished,
  dateModified: dateModified || datePublished,
  url:          `${SITE_URL}/blog/${slug}`,
  author: {
    "@type": "Person",
    name:    "Тетяна Ліщинська",
    url:     `${SITE_URL}/about`,
  },
  publisher: PUBLISHER,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":   `${SITE_URL}/blog/${slug}`,
  },
});

// ── Ціни (Pricing) ────────────────────────────────────────
export const pricingSchema = {
  "@context": "https://schema.org",
  "@type":    "Service",
  name:       "Юридичні послуги адвоката Ліщинської",
  url:        `${SITE_URL}/pricing`,
  provider: {
    "@type":   "LegalService",
    name:      "Адвокат Ліщинська",
    telephone: PHONE,
    address:   ADDRESS,
  },
  areaServed: {
    "@type": "City",
    name:    "Рівне",
  },
  description:
    "Вартість юридичних послуг: консультації, захист у суді, " +
    "розробка договорів, сімейні та цивільні справи.",
};
