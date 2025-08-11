import { FC, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

import TitleChapter from "../../components/TitleChapter/TitleChapter.tsx";
import SEOHelper from "../../SEOHelpers/SEOHelper.tsx";
import Toast from "../../components/Taost/Toast.tsx";

const siteUrl = "https://advocate-lishchynska.rivne.ua/contacts";

const Contacts: FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          if (form.current) {
            <Toast
              type="success"
              message="Ваш запит на звмовлення консультації не був відправлений"
              iconName="Check icon"
            />;
            form.current.reset();
          }
        },
        (error) => {
          <Toast
            type="danger"
            message={`Ваш запит на звмовлення консультації не був відправлений ${String(
              error
            )}`}
            iconName="Error icon"
          />;
        }
      );
  };

  return (
    <>
      <SEOHelper
        title="Контакти — Адвокат Ліщинська"
        description="Контакти адвоката Ліщинської у Рівному. Адреса, телефон, email."
        keywords="контакти адвокат Рівне, юридична допомога, адвокат телефон"
        url={siteUrl}
        image={`${siteUrl}/images/og-image.jpg`}
      />

      <div className="relative my-8 sm:my-16">
        <TitleChapter>Контакти</TitleChapter>
      </div>

      <section className="text-slate-900 body-font relative w-full">
        <div className="container px-5 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-1"
              title="map"
              src="https://maps.google.com/maps?width=100%&height=600&hl=uk&q=Рівне, вул. Кулика і Гудачека 30&ie=UTF8&t=&z=16&iwloc=B&output=embed"
              style={{
                filter: "opacity(0.8)",
              }}
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-primary tracking-widest text-xs">
                  ГРАФІК РОБОТИ
                </h2>
                <p className="mt-1">ПН. – ПТ. – з 08:00 до 17:00</p>
                <p className="mt-1">Сб., Нд. - Вихідні</p>
                <h2 className="title-font font-semibold text-primary tracking-widest text-xs mt-4">
                  АДРЕСА
                </h2>
                <p className="mt-1">м. Рівне, вул. Кулика і Гудачека 30</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-primary tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-slate-600 leading-relaxed">
                  tanya_lischynska@ukr.net
                </a>
                <h2 className="title-font font-semibold text-primary tracking-widest text-xs mt-4">
                  ТЕЛЕФОН
                </h2>
                <p className="leading-relaxed">+38 098 259-259-9</p>
                <p className="leading-relaxed">(Viber, WhatsApp, Telegram)</p>
              </div>
            </div>
          </div>
          <form
            className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
            ref={form}
            onSubmit={sendEmail}
          >
            <h2 className="text-primary text-3xl mb-1 font-medium title-font text-center uppercase">
              контактна форма
            </h2>
            <p className="leading-relaxed mb-5 text-slate-600">
              Заповніть форму, щоб замовити консультацію
            </p>

            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-slate-600"
              >
                Вкажіть ім'я і прізвище
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white rounded border border-primary focus:ring-1 focus:ring-primary text-base outline-none text-slate-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-slate-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white rounded border border-primary focus:ring-1 focus:ring-primary text-base outline-none text-slate-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-slate-600"
              >
                Ваш номер телефону
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                required
                className="w-full bg-white rounded border border-primary focus:ring-1 focus:ring-primary text-base outline-none text-slate-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-slate-600"
              >
                Ваше питання
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full bg-white rounded border border-primary focus:ring-1 focus:ring-primary h-32 text-base outline-none text-slate-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-cyan-50 bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/80 rounded text-lg"
            >
              Замовити консультацію
            </button>
            <p className="text-xs text-slate-500 mt-3">
              *натискаючи «Замовити консультацію», Ви погоджуєтесь на обробку
              персональних даних.
            </p>
          </form>
        </div>
      </section>
      <Toast type="dander" message="error message" iconName="Error icon" />
    </>
  );
};

export default Contacts;
