import { InputHTMLAttributes, forwardRef } from 'react';

import classNames from 'classnames/bind';

import styles from './Radio.module.scss';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'gender' | 'ageGroup' | 'additionalInfo'
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
      <label className={cx({ [type]: true })} htmlFor={label}>
        {label}
      </label>
    </>
  );
});

export default Radio;
