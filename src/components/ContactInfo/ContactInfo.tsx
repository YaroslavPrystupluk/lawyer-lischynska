
import  { FC } from "react";

const ContactInfo: FC = () => (
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
            width="100%"
            height="100%"
            className="absolute inset-1"
            title="map"
            src="https://maps.google.com/maps?width=100%&height=600&hl=uk&q=Рівне, вул. Кулика і Гудачека 30&ie=UTF8&t=&z=16&iwloc=B&output=embed"
            style={{ filter: "opacity(0.8)" }}
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
                <a className="text-slate-600 leading-relaxed">tanya_lischynska@ukr.net</a>
                <h2 className="title-font font-semibold text-primary tracking-widest text-xs mt-4">
                    ТЕЛЕФОН
                </h2>
                <p className="leading-relaxed">+38 098 259-259-9</p>
                <p className="leading-relaxed">(Viber, WhatsApp, Telegram)</p>
            </div>
        </div>
    </div>
);

export default ContactInfo;
