import { Colors, colors } from '@styles/colorPalette';

interface MinusProps {
  width?: number
  height?: number
  color?: Colors
}

function Minus({ width = 14, height = 2, color = 'black' }: MinusProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.16666 1H12.8333" stroke={colors[color]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  );
}

export default Minus;
