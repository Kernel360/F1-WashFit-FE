/* eslint-disable max-len */
import { ButtonHTMLAttributes, CSSProperties, useMemo } from 'react';

import {
  ButtonColor, ButtonSize, buttonColorMap, buttonSizeMap, buttonWeakMap,
} from '@styles/button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  color?: ButtonColor
  size?: ButtonSize
  weak?: boolean
  full?: boolean
  disabled?: boolean
  css?: CSSProperties
}

function Button({
  children, color = 'primary', size = 'small', weak = false, full, disabled, css, ...props
}: ButtonProps) {
  const styles = useMemo(() => {
    return {
      cursor: disabled ? 'initial' : 'pointer',
      borderRadius: '6px',
      color: weak ? buttonWeakMap[color].color : buttonColorMap[color].color,
      backgroundColor: weak ? buttonWeakMap[color].backgroundColor : buttonColorMap[color].backgroundColor,
      fontSize: buttonSizeMap[size].fontSize,
      padding: buttonSizeMap[size].padding,
      width: full ? '100%' : 'auto',
      display: full ? 'block' : 'inline',
      opacity: disabled ? 0.3 : 1,
      border: buttonColorMap[color].border,
      ...css,
    };
  }, [disabled, full, weak, color, size, css]);
  return (
    <button style={styles} {...props}>{children}</button>
  );
}

export default Button;
