/* eslint-disable max-len */
import { ButtonHTMLAttributes, CSSProperties, useMemo } from 'react';

import {
  ButtonColor, ButtonSize, buttonColorMap, buttonSizeMap,
} from '@styles/button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  color?: ButtonColor
  size?: ButtonSize
  full?: boolean
  disabled?: boolean
  css?: CSSProperties
}

function Button({
  children, color = 'active', size = 'small', full, disabled = false, css, ...props
}: ButtonProps) {
  const styles = useMemo(() => {
    return {
      cursor: disabled ? 'initial' : 'pointer',
      borderRadius: '8px',
      color: disabled ? buttonColorMap.inActive.color : buttonColorMap[color].color,
      backgroundColor: disabled ? buttonColorMap.inActive.backgroundColor : buttonColorMap[color].backgroundColor,
      fontSize: buttonSizeMap[size].fontSize,
      padding: buttonSizeMap[size].padding,
      width: full ? '100%' : 'auto',
      display: full ? 'block' : 'inline',
      ...css,
    };
  }, [disabled, full, color, size, css]);
  return (
    <button style={styles} disabled={disabled} {...props}>{children}</button>
  );
}

export default Button;
