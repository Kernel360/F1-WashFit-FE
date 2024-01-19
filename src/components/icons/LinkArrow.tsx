interface LinkArrowProps {
  width?: number
  height?: number
}

function LinkArrow({ width = 8, height = 14 }: LinkArrowProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L6.68539 6.29289C7.10487 6.68342 7.10487 7.31658 6.68539 7.70711L1 13" stroke="#CDCFD0" strokeWidth="1.5" strokeLinecap="round" />
    </svg>

  );
}

export default LinkArrow;
