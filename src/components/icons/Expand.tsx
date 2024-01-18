import { Colors, colors } from '@styles/colorPalette';

interface ExpandProps {
  width?: number
  height?: number
  isRotate: boolean
  color?: Colors
}

function Expand({
  width = 10, height = 6, color = 'black', isRotate,
}: ExpandProps) {
  return (
    <svg width={width} height={height} transform={isRotate ? 'rotate(180)' : 'rotate(0)'} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.99595 5.74996C4.89595 5.74996 4.8022 5.7326 4.7147 5.69788C4.6272 5.66315 4.54873 5.61107 4.47928 5.54163L0.52799 1.59033C0.370517 1.43286 0.295253 1.25343 0.302198 1.05204C0.309142 0.850654 0.389003 0.67357 0.541781 0.520793C0.694559 0.368015 0.871642 0.291626 1.07303 0.291626C1.27442 0.291626 1.4515 0.368015 1.60428 0.520793L5.00011 3.93746L8.41678 0.520793C8.56956 0.368015 8.74664 0.295098 8.94803 0.302043C9.14942 0.308987 9.3265 0.388848 9.47928 0.541626C9.63206 0.694404 9.70845 0.871487 9.70845 1.07288C9.70845 1.27426 9.62971 1.45331 9.47224 1.61L5.52095 5.54163C5.44595 5.61107 5.3647 5.66315 5.2772 5.69788C5.1897 5.7326 5.09595 5.74996 4.99595 5.74996Z" fill={colors[color]} />
    </svg>

  );
}

export default Expand;
