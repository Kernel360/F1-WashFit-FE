/* eslint-disable jsx-a11y/label-has-associated-control */
import { InputHTMLAttributes, forwardRef } from 'react';

import classNames from 'classnames/bind';

import Flex from '@shared/flex/Flex';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

import styles from './ColorPicker.module.scss';

interface ColorPickerProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  value: string
  color: string
}

const cx = classNames.bind(styles);

const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>(({
  label, value, color, ...props
}, ref) => {
  return (
    <Flex direction="column" justify="center" align="center">
      <input className={cx('input')} id={label} type="radio" ref={ref} value={value} {...props} />
      <label className={cx('label')} htmlFor={label} style={{ backgroundColor: color }} />
      <Spacing size={6} />
      <Text typography="t7" color="gray200" className={cx('text')}>{label}</Text>
    </Flex>
  );
});

export default ColorPicker;
