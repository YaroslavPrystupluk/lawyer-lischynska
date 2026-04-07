import { FC } from "react";

type SvgIconProps = {
  icon: string;
  className?: string;
  size?: number;
}

export const SvgIcon: FC<SvgIconProps> = ({
  icon,
  className = "",
  size,
  ...props
}) => {
  return (
    <svg className={className} width={size} height={size} {...props}>
      <use href={`/icons/icons.svg#${icon}`} />
    </svg>
  );
};
