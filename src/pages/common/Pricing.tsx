import { FC, useEffect, useState } from "react";
import Spiner from "../../components/Spiner/Spiner";
import { IPrices } from "../../types/types";
import TitleChapter from "../../components/TitleChapter/TitleChapter";
import SEOHelper from "../../SEOHelpers/SEOHelper.tsx";

const siteUrl = "https://advocate-lishchynska.rivne.ua/pricing";

const Pricing: FC = () => {
  const [prices, setPrices] = useState<IPrices[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true);
      try {
        const response = await fetch("/prices.json");
        if (!response.ok) {
          throw new Error("Помилка завантаження даних");
        }
        const data = await response.json();
        setPrices(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Невідома помилка");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  return (
    <>
        <SEOHelper
            title="Вартість послуг — Адвокат Тетяна Ліщинська"
            description="Дізнайтесь вартість юридичних послуг адвоката Тетяни Ліщинської у Рівному."
            keywords="адвокат Рівне, юридичні послуги, консультації, вартість послуг"
            url={siteUrl}
            image={`${siteUrl}/images/og-image.png`}
        />

        <div className="relative my-8 sm:my-16">
            <TitleChapter>Вартість послуг</TitleChapter>
        </div>

        {loading && (
            <div className="text-center text-gray-500 py-8">
                <Spiner />
            </div>
        )}

        {error && <p className="text-center text-red-600 py-6">{error}</p>}

        {!loading && !error && (
            <>
                {/* Mobile: cards */}
                <div className="md:hidden space-y-3">
                    {prices.map(({ id, name, price }) => (
                        <div
                            key={id}
                            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                        >
                            <div className="text-xs uppercase tracking-wide text-slate-500">
                                Назва послуги
                            </div>
                            <div className="mt-1 font-medium text-slate-900 break-words">
                                {name}
                            </div>

                            <div className="mt-3 text-xs uppercase tracking-wide text-slate-500">
                                Вартість
                            </div>
                            <div className="mt-1 font-semibold text-primary">
                                {price}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop/Tablet: table */}
                <div className="mt-2 overflow-x-auto rounded-xl border border-slate-200 shadow-sm hidden md:block">
                <table className="w-full text-sm text-left rtl:text-right text-slate-500">
                    <thead className="text-xs uppercase bg-primary text-white">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Назва послуги
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Вартість
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {prices.map(({ id, name, price }) => (
                        <tr
                            key={id}
                            className="odd:bg-white even:bg-slate-100 border-b border-prymary text-primary"
                        >
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {name}
                            </th>
                            <td className="px-6 py-4 font-bold">{price}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </>
        )}
    </>
  );
};


export default Pricing;
