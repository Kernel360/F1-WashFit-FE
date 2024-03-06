/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';

import { Colors, colors } from '@styles/colorPalette';

interface LogoProps {
  width?: number
  height?: number
  color?: Colors
  onClick?: () => void
}

function Logo({
  width = 97, height = 19, color = 'black', onClick,
}: LogoProps) {
  return (
    <Image src="/assets/washfit.png" width={80} height={16} alt="logo" />
  );
}

export default Logo;
