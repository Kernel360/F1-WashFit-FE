interface LeftIconProps {
  className?: string;
  children?: React.ReactNode;
  isDisplayLogo?:boolean
}
interface RightIconProps {
  className?: string;
  displayRightIconType?:string;
  onFilterClick?: () => void;
}

interface HeaderProps extends LeftIconProps {
  isTransparent?: boolean;
  displayRightIconType?:string;
  onFilterClick?: () => void;
}

export type { HeaderProps, LeftIconProps, RightIconProps };
