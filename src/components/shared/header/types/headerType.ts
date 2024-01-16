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
  className?: string
}

export type { HeaderProps, RightIconProps };
