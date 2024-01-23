/* eslint-disable no-nested-ternary */

'use client';

import { forwardRef, InputHTMLAttributes, useState } from 'react';

import classNames from 'classnames/bind';

import CloseEys from '@components/icons/CloseEys';
import OpenEye from '@components/icons/OpenEye';

import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isPasswordType?: boolean
}

const cx = classNames.bind(styles);
// eslint-disable-next-line prefer-arrow-callback
const Input = forwardRef<HTMLInputElement, InputProps>(({ isPasswordType, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleEyeIcon = () => {
    setIsOpen((prev) => { return !prev; });
  };

  return (
    <div className={cx('container')}>
      <input className={cx('input')} {...props} ref={ref} type={isPasswordType === false ? 'text' : isOpen ? 'password' : 'text'} />
      <div className={cx('iconWrapper')}>
        {isPasswordType && (isOpen
          ? <OpenEye size={20} onClick={handleEyeIcon} />
          : <CloseEys size={20} onClick={handleEyeIcon} />
        )}
      </div>
    </div>
  );
});

export default Input;
