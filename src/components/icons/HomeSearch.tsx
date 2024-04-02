import { Colors, colors } from '@/styles/colorPalette';

interface HomeSearchProps {
  size?: number;
  color?: Colors;
}

function HomeSearch({ size = 24, color = 'white' }: HomeSearchProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="search-refraction">
        <path
          id="Icon"
          d="M21 21L16.65 16.65M11 6C13.7614 6 16 8.23858 16 11M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          stroke="#404253"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={colors[color]}
        />
      </g>
    </svg>
  );
}

export default HomeSearch;
