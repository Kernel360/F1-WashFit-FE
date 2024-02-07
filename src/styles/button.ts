import { colors } from './colorPalette';

export const buttonColorMap = {
  active: {
    backgroundColor: colors.primary500,
    color: colors.white,
  },
  inActive: {
    backgroundColor: colors.gray100,
    color: colors.gray500,
  },
  line: {
    backgroundColor: colors.gray200,
    color: colors.gray500,
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
    fontSize: '16px',
    padding: '14.5px 10px',
  },
};

export type ButtonColor = keyof typeof buttonColorMap;
export type ButtonSize = keyof typeof buttonSizeMap;
