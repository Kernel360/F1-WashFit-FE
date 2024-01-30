interface IconProps {
  className?: string;
  type?: string;
}

interface LeftIconProps extends IconProps {
  title?: React.ReactNode;
}

interface RightIconProps extends IconProps {
  onFilterClick?: () => void;
}

interface HeaderProps extends LeftIconProps {
  isTransparent?: boolean;
  onFilterClick?: () => void;
}

export type { HeaderProps, LeftIconProps, RightIconProps };
