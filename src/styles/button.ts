import { colors } from './colorPalette';

export const buttonColorMap = {
  primary: {
    backgroundColor: colors.primary,
    color: colors.white,
    border: `1px solid ${colors.primary}`,
  },
  secondary: {
    backgroundColor: colors.secondary,
    color: colors.white,
    border: `1px solid ${colors.secondary}`,
  },
  gray: {
    backgroundColor: colors.tertiary,
    color: colors.white,
    border: `1px solid ${colors.tertiary}`,
  },
};

export const buttonWeakMap = {
  primary: {
    backgroundColor: colors.white,
    color: colors.primary,
    border: `1px solid ${colors.primary}`,
  },
  secondary: {
    backgroundColor: colors.white,
    color: colors.secondary,
    border: `1px solid ${colors.secondary}`,
  },
  gray: {
    backgroundColor: colors.white,
    color: colors.tertiary,
    border: `1px solid ${colors.tertiary}`,
  },
};

export const buttonSizeMap = {
  small: {
    fontSize: '13px',
    padding: '8px 9px',
  },
  medium: {
    fontSize: '16px',
    padding: '10px 15px',
  },
  large: {
    fontSize: '18px',
    padding: '12px 10px',
  },
};

export type ButtonColor = keyof typeof buttonColorMap;
export type ButtonSize = keyof typeof buttonSizeMap;
