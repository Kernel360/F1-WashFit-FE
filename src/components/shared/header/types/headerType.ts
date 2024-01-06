interface CommonProps {
  isLogin?: boolean;
  displayLogo?: boolean;
  displayRightIcon?: boolean;
}

interface RightIconProps extends CommonProps {
  className?: string;
}

interface HeaderProps extends CommonProps {
  isTransparent?: boolean;
}

export type { HeaderProps, RightIconProps };
