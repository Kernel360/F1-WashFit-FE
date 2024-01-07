import { Colors, colors } from '@styles/colorPalette';

interface MoreProps {
  size?: number
  color?: Colors
}

function More({ size = 24, color = 'black' }: MoreProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 16.5C13.33 16.5 14 17.17 14 18C14 18.83 13.33 19.5 12.5 19.5C11.67 19.5 11 18.83 11 18C11 17.17 11.67 16.5 12.5 16.5ZM11 12C11 12.83 11.67 13.5 12.5 13.5C13.33 13.5 14 12.83 14 12C14 11.17 13.33 10.5 12.5 10.5C11.67 10.5 11 11.17 11 12ZM11 6C11 6.83 11.67 7.5 12.5 7.5C13.33 7.5 14 6.83 14 6C14 5.17 13.33 4.5 12.5 4.5C11.67 4.5 11 5.17 11 6Z" fill={colors[color]} />
    </svg>

  );
}

export default More;
