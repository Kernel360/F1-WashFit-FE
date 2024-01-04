import { Colors, colors } from '@styles/colorPalette';

interface MapProps {
  size?: number
  color?: Colors
}

function Map({ size = 24, color = 'black' }: MapProps) {
  return (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_576_5687)">
        <path d="M17.6 8.33333C17.6 14.1667 10.1 19.1667 10.1 19.1667C10.1 19.1667 2.59998 14.1667 2.59998 8.33333C2.59998 6.3442 3.39015 4.43655 4.79667 3.03003C6.2032 1.6235 8.11085 0.833328 10.1 0.833328C12.0891 0.833328 13.9968 1.6235 15.4033 3.03003C16.8098 4.43655 17.6 6.3442 17.6 8.33333Z" stroke={colors[color]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.1 10.8333C11.4807 10.8333 12.6 9.71404 12.6 8.33333C12.6 6.95262 11.4807 5.83333 10.1 5.83333C8.71926 5.83333 7.59998 6.95262 7.59998 8.33333C7.59998 9.71404 8.71926 10.8333 10.1 10.8333Z" stroke={colors[color]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_576_5687">
          <rect width="20" height="20" fill="white" transform="translate(0.0999756)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Map;
