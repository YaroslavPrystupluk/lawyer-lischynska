import { FC, ReactNode } from "react";

interface TitleChapterProps {
  children: ReactNode;
}

const TitleChapter: FC<TitleChapterProps> = ({ children, ...props }) => {
  return (
    <h1
      className="text-3xl sm:text-5xl text-center font-bold before:content-[''] before:bg-primary before:absolute before:bottom-[-30%] sm:before:bottom-[-50%] before:left-[50%] before:translate-x-[-50%] before:w-20 before:h-1"
      {...props}
    >
      {children}
    </h1>
  );
};

export default TitleChapter;
