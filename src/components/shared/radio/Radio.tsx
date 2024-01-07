import { InputHTMLAttributes, forwardRef } from 'react';

import classNames from 'classnames/bind';

import styles from './Radio.module.scss';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'gender' | 'ageGroup'
  label: string
  value: string | number
}

const cx = classNames.bind(styles);

const Radio = forwardRef<HTMLInputElement, RadioProps>(({
  type, label, value,
}, ref) => {
  return (
    <>
      <input id={label} type="radio" ref={ref} value={value} />
      <label className={cx({ gender: type === 'gender', ageGroup: type === 'ageGroup' })} htmlFor={label}>{label}</label>
    </>
  );
});

export default Radio;
