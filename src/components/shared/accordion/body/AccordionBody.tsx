import {
  forwardRef, useEffect, useState, useRef,
} from 'react';

import classNames from 'classnames/bind';

import { useAccordion } from '@contexts/AccordionContext';

import { AccordionBodyProps } from '../type/accordion.type';

import styles from './AccordionBody.module.scss';

const cx = classNames.bind(styles);

const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>(({
  itemName = '', children, className, ...props
}, ref) => {
  const innerRef = useRef<HTMLDivElement>(null);

  const { activeItems } = useAccordion();
  const isActive = activeItems.includes(itemName);

  const [currentBodyHeight, setCurrentBodyHeight] = useState<string>();

  useEffect(() => {
    if (innerRef.current == null) return;

    setCurrentBodyHeight(isActive ? `${innerRef.current.clientHeight}px` : '0');
  }, [isActive]);

  return (
    <div
      ref={ref}
      {...props}
      className={cx(className)}
      data-action-item={isActive}
      style={{ height: currentBodyHeight ?? `${innerRef?.current?.clientHeight}px` }}
    >
      <div data-name="body-inner" ref={innerRef}>
        {children}
      </div>
    </div>
  );
});

export default AccordionBody;
