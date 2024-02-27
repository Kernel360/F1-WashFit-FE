import { Colors, colors } from '@styles/colorPalette';

interface DeleteProps {
  size?: number
  color?: Colors
  fillColor?: Colors
}

function Delete({ size = 17, color = 'white', fillColor = 'black' }: DeleteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.99998 14.6666C11.6819 14.6666 14.6666 11.6818 14.6666 7.99992C14.6666 4.31802 11.6819 1.33325 7.99998 1.33325C4.31808 1.33325 1.33331 4.31802 1.33331 7.99992C1.33331 11.6818 4.31808 14.6666 7.99998 14.6666Z" fill={colors[fillColor]} />
      <path d="M5.33331 10.6666L10.6666 5.33325" stroke={colors[color]} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.33331 5.33325L10.6666 10.6666" stroke={colors[color]} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default Delete;
