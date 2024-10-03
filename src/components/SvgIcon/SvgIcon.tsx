import iconsSprite from "/icons/icons.svg";
interface SvgIconProps {
  icon: string;
  className?: string;
  size?: number;
}

export const SvgIcon = ({ icon, className = "", size = 50 }: SvgIconProps) => (
  <svg className={className} width={size} height={size}>
    <use href={`${iconsSprite}#${icon}`} />
  </svg>
);
