import { useCallback } from 'react';

import classNames from 'classnames/bind';

import { useAccordion } from '@contexts/AccordionContext';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

interface AccordionHeaderProps {
  children: React.ReactNode
  label?: string
  className?: string
  openIcon?: React.ReactNode
  closeIcon?: React.ReactNode
}

function AccordionHeader({
  label, children, className, openIcon, closeIcon,
}: AccordionHeaderProps) {
  const { changeSelectedItem, activeItem } = useAccordion();

  const handleClickAccordionHeader = useCallback(() => {
    changeSelectedItem(label || '');
  }, [changeSelectedItem, label]);

  return (
    <div onClick={handleClickAccordionHeader} className={cx('container', className)} role="presentation">
      {children}
      {label === activeItem ? closeIcon : openIcon}
    </div>
  );
}

export default AccordionHeader;
