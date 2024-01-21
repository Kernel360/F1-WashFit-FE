import { Colors, colors } from '@styles/colorPalette';

interface DropdownArrowProps {
  width?: number
  height?: number
  isRotate: boolean
  color?: Colors
}

function DropdownArrow({
  width = 10, height = 5, color = 'black', isRotate,
}: DropdownArrowProps) {
  return (
    <svg width={width} height={height} transform={isRotate ? 'rotate(180)' : 'rotate(0)'} viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.4752 4.475L0.850195 0.85C0.800195 0.8 0.762695 0.745833 0.737695 0.6875C0.712695 0.629167 0.700195 0.566667 0.700195 0.5C0.700195 0.366667 0.746029 0.25 0.837695 0.15C0.929362 0.05 1.0502 0 1.2002 0H8.8002C8.9502 0 9.07103 0.05 9.1627 0.15C9.25436 0.25 9.3002 0.366667 9.3002 0.5C9.3002 0.533333 9.2502 0.65 9.1502 0.85L5.5252 4.475C5.44186 4.55833 5.35853 4.61667 5.2752 4.65C5.19186 4.68333 5.1002 4.7 5.0002 4.7C4.9002 4.7 4.80853 4.68333 4.7252 4.65C4.64186 4.61667 4.55853 4.55833 4.4752 4.475Z" fill={colors[color]} />
    </svg>

  );
}

export default DropdownArrow;
