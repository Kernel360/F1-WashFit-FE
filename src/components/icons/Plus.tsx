import { Colors, colors } from '@styles/colorPalette';

interface PlusProps {
  size?: number
  color: Colors
}

function Plus({ size = 20, color = 'black' }: PlusProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 4.16675V15.8334" stroke={colors[color]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.16667 10H15.8333" stroke={colors[color]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default Plus;
