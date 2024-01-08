'use client';

import { useState } from 'react';

import { Colors, colors } from '@styles/colorPalette';

interface HeartProps {
  width: number
  height:number
  color?: Colors
  changeColor?: Colors
}

function Heart({
  width, height, color = 'gray400', changeColor = 'pink',
}: HeartProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleHeartClick = () => {
    setIsClicked((prev) => { return !prev; });
  };

  return (
    <svg width={width} height={height} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleHeartClick}>
      <path d="M17.612 2.41452C17.1722 1.96607 16.65 1.61034 16.0752 1.36763C15.5005 1.12492 14.8844 1 14.2623 1C13.6401 1 13.0241 1.12492 12.4493 1.36763C11.8746 1.61034 11.3524 1.96607 10.9126 2.41452L9.99977 3.34476L9.08699 2.41452C8.19858 1.50912 6.99364 1.00047 5.73725 1.00047C4.48085 1.00047 3.27591 1.50912 2.38751 2.41452C1.4991 3.31992 1 4.5479 1 5.82833C1 7.10875 1.4991 8.33674 2.38751 9.24214L3.30029 10.1724L9.99977 17L16.6993 10.1724L17.612 9.24214C18.0521 8.79391 18.4011 8.26171 18.6393 7.67596C18.8774 7.09021 19 6.46237 19 5.82833C19 5.19428 18.8774 4.56645 18.6393 3.9807C18.4011 3.39494 18.0521 2.86275 17.612 2.41452Z" stroke={isClicked ? colors[changeColor] : colors[color]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={isClicked ? colors[changeColor] : colors.white} />
    </svg>
  );
}

export default Heart;
