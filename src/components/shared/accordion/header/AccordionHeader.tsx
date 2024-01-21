import {
  forwardRef, useCallback,
} from 'react';

import classNames from 'classnames/bind';

import { useAccordion } from '@contexts/AccordionContext';

import { AccordionHeaderProps } from '../type/accordion.type';

import styles from './AccordionHeader.module.scss';

const cx = classNames.bind(styles);

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>(({
  itemName = '', children, onClick, className, openIcon, closeIcon, ...props
}, ref) => {
  const { setActiveItem, activeItems } = useAccordion();

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setActiveItem(itemName);
    onClick?.(event);
  }, [itemName, onClick, setActiveItem]);

  const isActive = activeItems.includes(itemName);

  return (
    <button onClick={handleClick} ref={ref} {...props} className={cx('container', className)}>
      {children}
      {isActive ? closeIcon : openIcon}
    </button>
  );
});

export default AccordionHeader;
