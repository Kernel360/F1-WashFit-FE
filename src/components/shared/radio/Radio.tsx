/* eslint-disable import/no-extraneous-dependencies */
import { InputHTMLAttributes, forwardRef } from 'react';

import classNames from 'classnames/bind';

import Flex from '../flex/Flex';

import styles from './Radio.module.scss';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  type:
  | 'gender'
  | 'ageGroup'
  | 'additionalInfo'
  | 'filter'
  | 'product'
  | 'washFilter';
  label: string;
  value: string | number;
  img?: JSX.Element;
}

const cx = classNames.bind(styles);

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({
    type, label, value, img, ...props
  }, ref) => {
    return (
      <>
        <input
          className={cx('input')}
          id={label}
          type="radio"
          ref={ref}
          value={value}
          {...props}
        />

        <label className={cx('label', { [type]: true })} htmlFor={label}>
          <Flex direction="column" justify="center" align="center">
            {img}
            {label}
          </Flex>
        </label>
      </>
    );
  },
);

export default Radio;
