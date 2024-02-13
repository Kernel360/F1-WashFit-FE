interface IconProps {
  className?: string;
  type?: 'search' | 'home' | 'favorite' | 'product';
}

interface LeftIconProps extends IconProps {
  title?: React.ReactNode;
  stepBack?:() => void | undefined;
}

interface RightIconProps extends IconProps {
  onFilterClick?: () => void;
}

interface HeaderProps extends LeftIconProps {
  isTransparent?: boolean;
  onFilterClick?: () => void;
}

export type { HeaderProps, LeftIconProps, RightIconProps };
