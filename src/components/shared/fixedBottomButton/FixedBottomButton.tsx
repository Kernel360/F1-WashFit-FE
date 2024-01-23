import React, { ButtonHTMLAttributes } from 'react';
import { createPortal } from 'react-dom';

import classNames from 'classnames/bind';

import Button from '@shared/button/Button';

import styles from './FixedBottomButton.module.scss';

const cx = classNames.bind(styles);

interface FixedBottomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  disabled?: boolean
  onClick: () => void
  size?: 'large' | 'small' | 'medium'
}

function FixedBottomButton({
  children, onClick, disabled, size = 'large',
}: FixedBottomButtonProps) {
  const PORTAL_ROOT = document.getElementById('portal-root');
  if (PORTAL_ROOT == null) {
    return null;
  }

  return createPortal(
    <div className={cx('container')}>
      <Button size={size} full disabled={disabled} onClick={onClick}>
        {children}
      </Button>
    </div>,
    PORTAL_ROOT,
  );
}

export default FixedBottomButton;
