import { FC, useEffect, useState } from "react";
import Spiner from "../../components/Spiner/Spiner";
import { IPrices } from "../../types/types";
import TitleChapter from "../../components/TitleChapter/TitleChapter";

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
      <div className="relative my-8 sm:my-16">
        <TitleChapter>Вартість послуг</TitleChapter>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {loading && (
          <div className="text-center text-gray-500 py-4">
            <Spiner />
          </div>
        )}

        {error && <p className="text-center text-red-600 py-4">{error}</p>}

        {!loading && !error && (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs uppercase bg-primary text-gray-700">
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
                  className="odd:bg-white even:bg-gray-50 border-b border-gray-200 text-primary"
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
        )}
      </div>
    </>
  );
};

export default Pricing;
