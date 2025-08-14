import { FC } from "react";
import SEOHelper from "../../SEOHelpers/SEOHelper.tsx";
import TitleChapter from "../../components/TitleChapter/TitleChapter.tsx";
import ContactForm from "../../components/ContactForm/ContactForm.tsx";
import ContactInfo from "../../components/ContactInfo/ContactInfo.tsx";

const siteUrl = "https://advocate-lishchynska.rivne.ua/contacts";

const Contacts: FC = () => {
    return (
        <>
            <SEOHelper
                title="Контакти — Адвокат Ліщинська"
                description="Контакти адвоката Ліщинської у Рівному. Адреса, телефон, email."
                keywords="контакти адвокат Рівне, юридична допомога, адвокат телефон"
                url={siteUrl}
                image={`${siteUrl}/images/og-image.png`}
            />

            <div className="relative my-8 sm:my-16">
                <TitleChapter>Контакти</TitleChapter>
            </div>

            <section className="text-slate-900 body-font relative w-full">
                <div className="container px-5 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <ContactInfo />
                    <div className="lg:w-1/3 md:w-1/2 w-full md:py-8 mt-8 md:mt-0">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contacts;
