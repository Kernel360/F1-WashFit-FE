import { Colors, colors } from '@styles/colorPalette';

interface PenProps {
  size: number
  color?: Colors
}

function Pen({ size, color = 'gray100' }: PenProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_576_5653)">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.8698 1.6221L2.66977 11.8292L1.41602 15.5834L5.17018 14.3296L15.3773 4.1296C15.6535 3.85335 15.6535 3.4071 15.3773 3.13085L13.8685 1.6221C13.5923 1.34585 13.146 1.34585 12.8698 1.6221Z" stroke={colors[color]} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.6208 5.88627L11.1133 3.37877L12.8629 1.62918C13.1391 1.35293 13.5854 1.35293 13.8616 1.62918L15.3704 3.13793C15.6466 3.41418 15.6466 3.86043 15.3704 4.13668L13.6208 5.88627Z" stroke={colors[color]} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_576_5653">
          <rect width={size} height={size} fill={colors.white} />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Pen;
