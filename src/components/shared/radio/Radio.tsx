import { InputHTMLAttributes, forwardRef } from 'react';

import classNames from 'classnames/bind';

import styles from './Radio.module.scss';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'gender' | 'ageGroup' | 'additionalInfo'
  label: string
  value: string | number
  name: string
}

const cx = classNames.bind(styles);

const Radio = forwardRef<HTMLInputElement, RadioProps>(({
  type, label, value, name, ...props
}, ref) => {
  return (
    <>
      <input className={cx('input')} id={label} type="radio" ref={ref} value={value} name={name} {...props} />
      <label className={cx('label', { [type]: true })} htmlFor={label}>
        {label}
      </label>
    </>
  );
});

export default Radio;
