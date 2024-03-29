import { Colors, colors } from '@styles/colorPalette';

interface ShareProps {
  width?: number
  height?:number
  color?: Colors
  onClick?: () => void
}

function Share({
  width = 16, height = 18, color = 'black', onClick,
}: ShareProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
      <path d="M6.031 11.359L12.178 14.941M12.169 5.059L6.031 8.641M17.2 3.7C17.2 5.19117 15.9912 6.4 14.5 6.4C13.0088 6.4 11.8 5.19117 11.8 3.7C11.8 2.20883 13.0088 1 14.5 1C15.9912 1 17.2 2.20883 17.2 3.7ZM6.4 10C6.4 11.4912 5.19117 12.7 3.7 12.7C2.20883 12.7 1 11.4912 1 10C1 8.50883 2.20883 7.3 3.7 7.3C5.19117 7.3 6.4 8.50883 6.4 10ZM17.2 16.3C17.2 17.7912 15.9912 19 14.5 19C13.0088 19 11.8 17.7912 11.8 16.3C11.8 14.8088 13.0088 13.6 14.5 13.6C15.9912 13.6 17.2 14.8088 17.2 16.3Z" stroke={colors[color]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default Share;
