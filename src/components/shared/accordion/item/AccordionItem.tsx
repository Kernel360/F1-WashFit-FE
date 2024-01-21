import {
  Children, cloneElement, forwardRef, isValidElement,
} from 'react';

import classNames from 'classnames/bind';

import { AccordionItemProps } from '../type/accordion.type';

import styles from './AccordionItem.module.scss';

const cx = classNames.bind(styles);

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(({
  itemName, children, className, ...props
}, ref) => {
  const childrenWithProps = Children.toArray(children);

  const accordionItemChildren = childrenWithProps.map((child) => {
    if (isValidElement(child)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      return cloneElement(child, { ...child.props, itemName });
    }

    return null;
  });
  return (
    <div ref={ref} {...props} className={cx('container', className)}>
      {accordionItemChildren}
    </div>
  );
});

export default AccordionItem;
