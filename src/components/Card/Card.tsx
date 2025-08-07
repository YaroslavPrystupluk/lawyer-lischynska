import { useState } from "react";
import { SvgIcon } from "../SvgIcon/SvgIcon";
import { CARD } from "../../constants/constants";

const Card = () => {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CARD.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer"
            style={{ perspective: "1000px" }}
            onMouseEnter={() => toggleFlip(item.id)}
            onMouseLeave={() => toggleFlip(item.id)}
          >
            <div
              className="relative w-full h-full transition-all duration-500"
              style={{
                transformStyle: "preserve-3d",
                transform: flippedCards[item.id]
                  ? "rotateX(180deg)"
                  : "rotateX(0deg)",
              }}
            >
              {/* Front of card */}
              <div
                className="absolute w-full h-full flex items-center gap-x-3 sm:gap-x-7 px-4 border border-slate-300 bg-white rounded-sm"
                style={{ backfaceVisibility: "hidden" }}
              >
                <SvgIcon
                  icon={item.icon}
                  className="object-cover max-w-12 fill-primary"
                />
                <h1 className="text-lg sm:text-xl font-semibold uppercase">
                  {item.title}
                </h1>
              </div>

              {/* Back of card */}
              <div
                className="w-full h-full flex items-center gap-x-3 sm:gap-x-7 px-4 border border-slate-300 bg-primary rounded-sm"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateX(180deg)",
                }}
              >
                <SvgIcon
                  icon={item.icon}
                  className="object-cover max-w-12 fill-slate-100"
                />
                <ul className="w-full text-sm font-medium text-slate-100 list-disc pl-5 lowercase">
                  {item.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
