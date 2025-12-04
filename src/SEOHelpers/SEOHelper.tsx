import {Helmet} from "react-helmet-async";
import {FC} from "react";

type ISEOHelperProps = {
    title: string;
    description: string;
    keywords: string;
    url: string;
    image: string;
    jsonLdData?: any;
}

const SEOHelper: FC<ISEOHelperProps> = ({
                                            title,
                                            description,
                                            keywords,
                                            url,
                                            image,
                                            jsonLdData,
                                        }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description}/>
                {keywords && <meta name="keywords" content={keywords}/>}
                <link rel="canonical" href={url}/>

                {/* Open Graph */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={url}/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
                {image && <meta property="og:image" content={image}/>}
                <meta property="og:locale" content="uk_UA"/>

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:url" content={url}/>
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={description}/>
                {image && <meta name="twitter:image" content={image}/>}
            </Helmet>

            {jsonLdData && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLdData)}
                </script>
            )}
        </>
    );
};

export default SEOHelper;
