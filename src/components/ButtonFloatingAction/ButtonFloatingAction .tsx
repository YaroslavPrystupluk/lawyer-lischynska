import { FC, useEffect, useState } from "react";
// import { Link } from "react-router-dom";

interface Props {
    handleOpenModal: () => void;
}

const ButtonFloatingAction: FC<Props> = ({handleOpenModal}) => {
  // const [toggleTitle, setToggleTitle] = useState({
  //   text: true,
  //   icon: false,
  // });

  // useEffect(() => {
  //   const timer = setInterval(
  //     () =>
  //       setToggleTitle((prevState) => ({
  //         ...prevState,
  //         text: false,
  //         icon: true,
  //       })),
  //     1000
  //   );
  //   return clearInterval(timer);
  // }, []);
  //   console.log(toggleTitle);

    const [showText, setShowText] = useState(false);
    
    useEffect(() => {
        const interval = setInterval(() => setShowText(c => !c), 2000)
        return () => window.clearInterval(interval);
    }, []);
    
  return (
    // <Link to="/abaut">
      <button
          onClick={handleOpenModal}
        title="Contact Sale"
        className="fixed z-90 bottom-10 right-8 bg-primary w-16 h-16 sm:w-20 sm:h-20  rounded-full drop-shadow-lg flex justify-center items-center  hover:bg-primary/50 hover:drop-shadow-2xl hover:animate-bounce duration-300 cursor-pointer"
      >
          {
              showText
              ?<span className="text-white text-xs sm:text-sm">{'Кнопка зв\'язку'}</span>
                  :<span className="text-white text-4xl sm:text-5xl">&#9993;</span>
          }
        
        
        
      </button>
    // </Link>
  );
};

export default ButtonFloatingAction;
