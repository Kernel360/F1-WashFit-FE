import { Colors, colors } from '@styles/colorPalette';

interface SearchProps {
  size?: number
  color?: Colors
}

function Search({ size = 17, color = 'gray300' }: SearchProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.8222 12.8222L15.33 15.33M14.6135 7.80675C14.6135 4.04749 11.566 1 7.80675 1C4.04749 1 1 4.04749 1 7.80675C1 11.566 4.04749 14.6135 7.80675 14.6135C11.566 14.6135 14.6135 11.566 14.6135 7.80675Z" stroke={colors[color]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default Search;
