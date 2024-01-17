interface LeftIconProps {
  className?: string;
  children?: React.ReactNode;
  isDisplayLogo?:boolean
}
interface RightIconProps {
  className?: string;
  displayRightIconType?:string;

}

interface HeaderProps extends LeftIconProps {
  isTransparent?: boolean;
  displayRightIconType?:string;
}

export type { HeaderProps, LeftIconProps, RightIconProps };
