import { FC, useEffect, useState } from "react";

type ButtonFloatingActionProps = {
  handleOpenModal: () => void;
}

const ButtonFloatingAction: FC<ButtonFloatingActionProps> = ({ handleOpenModal }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setShowText((c) => !c), 2000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    // <Link to="/abaut">
    <button
      onClick={handleOpenModal}
      title="Contact Sale"
      className="outline-none fixed z-90 bottom-10 right-8 bg-primary w-16 h-16 sm:w-20 sm:h-20  rounded-full drop-shadow-lg flex justify-center items-center  hover:bg-primary/50 hover:drop-shadow-2xl hover:animate-bounce duration-300 cursor-pointer mb-12"
    >
      {showText ? (
        <span className="text-white text-xs sm:text-sm">
          {"Кнопка зв'язку"}
        </span>
      ) : (
        <span className="text-white text-4xl sm:text-5xl">&#9993;</span>
      )}
    </button>
  );
};

export default ButtonFloatingAction;
