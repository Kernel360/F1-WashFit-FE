import { createPortal } from 'react-dom';

import classNames from 'classnames/bind';

import useMountTransition from '@/hooks/useMountTransition';

import styles from './Drawer.module.scss';

const cx = classNames.bind(styles);

interface DrawerProps {
  isOpen: boolean,
  children: React.ReactNode,
  onClose: () => void,
  className?: string,
  position?: 'left' | 'right' | 'top' | 'bottom',
  removeWhenClosed?: boolean
}

function Drawer({
  isOpen,
  children,
  className,
  position = 'right',
  onClose,
  removeWhenClosed = true,
}: DrawerProps) {
  const isTransitioning = useMountTransition(isOpen, 300);
  const DRAWER_ROOT = typeof window !== 'undefined' ? document.getElementById('drawer-root') : null;

  if (removeWhenClosed && !isOpen) {
    return null;
  }

  if (!isTransitioning && removeWhenClosed && !isOpen) {
    return null;
  }

  if (DRAWER_ROOT == null) {
    return null;
  }

  return createPortal(
    <div
      aria-hidden={isOpen ? 'false' : 'true'}
      className={cx('drawerContainer', {
        open: isOpen,
        in: isTransitioning,
        className,
      })}
    >
      <div
        className={cx('drawer', position, className)}
        role="dialog"
      >
        {children}
      </div>
      <div className={cx('backdrop', className)} onClick={onClose} role="presentation" />
    </div>,
    DRAWER_ROOT,
  );
}

export default Drawer;
