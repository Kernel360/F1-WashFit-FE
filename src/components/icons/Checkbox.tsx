import { Colors, colors } from '@styles/colorPalette';

interface CheckboxProps {
  size?: number
  color?: Colors
}

function Checkbox({
  size = 19, color = 'gray100',
}:CheckboxProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5332" y="1.53369" width="15.338" height="15.338" rx="3.06759" fill={colors[color]} />
      <path d="M5.75195 9.73953L7.94309 11.8868L12.654 6.51855" stroke="white" strokeWidth="1.5338" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default Checkbox;
