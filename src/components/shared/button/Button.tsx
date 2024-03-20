/* eslint-disable max-len */
import { ButtonHTMLAttributes, CSSProperties, useMemo } from 'react';

import {
  ButtonColor,
  ButtonSize,
  buttonColorMap,
  buttonSizeMap,
} from '@styles/button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: ButtonColor;
  size?: ButtonSize;
  full?: boolean;
  disabled?: boolean;
  css?: CSSProperties;
  borderRadius?: string;
  fontWeight?: CSSProperties['fontWeight'];
  bold?: boolean;
  width?: string;
  height?: string;
}

function Button({
  children,
  borderRadius = '8px',
  color = 'active',
  size = 'small',
  full,
  disabled = false,
  css,
  fontWeight,
  bold,
  width = 'auto',
  height = 'auto',
  ...props
}: ButtonProps) {
  const styles = useMemo(() => {
    return {
      cursor: disabled ? 'initial' : 'pointer',
      borderRadius,
      color: disabled
        ? buttonColorMap.inActive.color
        : buttonColorMap[color].color,
      backgroundColor: disabled
        ? buttonColorMap.inActive.backgroundColor
        : buttonColorMap[color].backgroundColor,
      fontSize: buttonSizeMap[size].fontSize,
      padding: buttonSizeMap[size].padding,
      width: full ? '100%' : width,
      height,
      display: full ? 'block' : 'inline',
      fontWeight: bold ? 'bold' : fontWeight,
      ...css,
    };
  }, [
    disabled,
    full,
    color,
    size,
    css,
    bold,
    borderRadius,
    fontWeight,
    height,
    width,
  ]);
  return (
    <button style={styles} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

export default Button;
