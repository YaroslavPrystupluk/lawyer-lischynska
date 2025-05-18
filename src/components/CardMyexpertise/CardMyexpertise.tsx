import { FC } from "react";

import TitleChapter from "../TitleChapter/TitleChapter";
import Card from "../Card/Card";

const CardMyexpertise: FC = () => {
  return (
    <>
      <div className="relative my-8 sm:my-16">
        <TitleChapter>Сфери моєї компетенції</TitleChapter>
      </div>
      <Card />
    </>
  );
};

export default CardMyexpertise;
