import React, { ButtonHTMLAttributes } from 'react';
import { createPortal } from 'react-dom';

import classNames from 'classnames/bind';

import Button from '@shared/button/Button';

import styles from './FixedBottomButton.module.scss';

const cx = classNames.bind(styles);

interface FixedBottomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void
  disabled?: boolean
  children: React.ReactNode
}

function FixedBottomButton({ children, onClick, disabled }: FixedBottomButtonProps) {
  const portalRoot = document.getElementById('portal-root');
  if (portalRoot == null) {
    return null;
  }

  return createPortal(
    <div className={cx('container')}>
      <Button size="large" full disabled={disabled} onClick={onClick}>
        {children}
      </Button>
    </div>,
    portalRoot,
  );
}

export default FixedBottomButton;
