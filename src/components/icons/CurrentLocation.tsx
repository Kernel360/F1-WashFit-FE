import { Colors, colors } from '@styles/colorPalette';

interface CurrentLocationProps {
  size?: number
  color?: Colors
}

function CurrentLocation({ size = 32, color = 'primary500' }: CurrentLocationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="CrosshairSimple">
        <path id="Vector" d="M16 27.5C22.3513 27.5 27.5 22.3513 27.5 16C27.5 9.64873 22.3513 4.5 16 4.5C9.64873 4.5 4.5 9.64873 4.5 16C4.5 22.3513 9.64873 27.5 16 27.5Z" stroke={colors[color]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path id="Vector_2" d="M16 4.5V9.5" stroke={colors[color]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path id="Vector_3" d="M4.5 16H9.5" stroke={colors[color]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path id="Vector_4" d="M16 27.5V22.5" stroke={colors[color]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path id="Vector_5" d="M27.5 16H22.5" stroke={colors[color]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>

  );
}

export default CurrentLocation;
