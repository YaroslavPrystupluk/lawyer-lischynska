import {FC} from "react";


const JsonLd: FC = () => {
    const data = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "Адвокат Ліщинська",
        "image": "https://advocate-lishchynska.rivne.ua/logo.png",
        "@id": "https://advocate-lishchynska.rivne.ua",
        "url": "https://advocate-lishchynska.rivne.ua",
        "telephone": "+380982592599",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "вул. Корольова, 15",
            "addressLocality": "Рівне",
            "postalCode": "33030",
            "addressCountry": "UA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 50.6199,
            "longitude": 26.2516
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "08:00",
                "closes": "17:00"
            }
        ],
        "sameAs": [
            "https://www.instagram.com/advocate_lishchynska_tetiana/"
        ],
        "description": "Адвокат у Рівному — юридичні послуги, консультації, захист у суді. Сімейні, цивільні, земельні, житлові справи, реєстрація бізнесу, стягнення боргу, спадщина, розробка договорів, аліменти, розірвання шлюбу, поділ майна, дтп, дорожньо транспортна пригода, дорожньо-транспортна пригода . Тетяна Ліщинська."
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(data)}
        </script>
    );
};

export default JsonLd;
