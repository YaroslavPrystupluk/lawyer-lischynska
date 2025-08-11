import {FormEvent, forwardRef, Ref, RefObject, useState} from "react";
import Toast from "../Taost/Toast.tsx";
import emailjs from "@emailjs/browser";

interface IFeedBackProps {
    ref: Ref<HTMLFormElement>;
}


const FeedbackContent = forwardRef<HTMLFormElement, IFeedBackProps>(
    (props, ref) => {
        const [toast, setToast] = useState<{ type: string; message: string; } | null>(null);
        const [isLoading, setIsLoading] = useState<boolean>(false)
        const formRef = ref as RefObject<HTMLFormElement>;
        const sendEmail = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (!formRef.current) return;
            setIsLoading(true)
            emailjs
                .sendForm(
                    import.meta.env.VITE_SERVICE_ID,
                    import.meta.env.VITE_TEMPLATE_ID,
                    formRef.current,
                    {publicKey: import.meta.env.VITE_PUBLIC_KEY}
                )
                .then(
                    () => {
                        setToast({
                            type: "success",
                            message: "Ваш запит успішно відправлений",
                        });
                        formRef.current?.reset();
                    },
                    (error) => {
                        setToast({
                            type: "danger",
                            message: `Ваш запит не відправлений: ${String(error)}`,
                        });
                    }
                ).finally(() => {
                setIsLoading(false);
            });
        };

    return (
        <>
             <section className="text-slate-900 body-font relative w-full">
                 <div className="container px-5 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div
                        className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
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
                        ref={formRef}
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
                        {isLoading ? (
                                <div className="flex justify-center">
                                    <svg aria-hidden="true" role="status"
                                         className="inline w-8 h-8 me-3 text-primary animate-spin"
                                         viewBox="0 0 100 101"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="#E5E7EB"/>
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentColor"/>
                                    </svg>
                                </div>)
                            :
                            (<button
                                type="submit"
                                className="text-cyan-50 bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/80 rounded text-lg"
                            >
                                Замовити консультацію
                            </button>)
                        }

                        <p className="text-xs text-slate-500 mt-3">
                            *натискаючи «Замовити консультацію», Ви погоджуєтесь на обробку
                            персональних даних.
                        </p>
                    </form>
                    {toast && (
                        <Toast
                            type={toast.type}
                            message={toast.message}
                            onClose={() => setToast(null)}
                        />
                    )}
                </div>
            </section>

        </>
    )
})

export default FeedbackContent
