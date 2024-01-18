import { Colors, colors } from '@styles/colorPalette';

interface BackProps {
  width?: number
  height?:number
  color?: Colors
  onClick?: () => void
}

function BackArrow({
  width = 7, height = 14, color = 'black', onClick,
}:BackProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
      <path d="M8 15.095L1.36705 8.82734C0.877651 8.3649 0.87765 7.61512 1.36705 7.15268L8 0.88501" stroke={colors[color]} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default BackArrow;
