import { forwardRef, InputHTMLAttributes } from 'react';

import classNames from 'classnames/bind';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);
// eslint-disable-next-line prefer-arrow-callback
const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  return <input className={cx('input')} {...props} ref={ref} />;
});

export default Input;
