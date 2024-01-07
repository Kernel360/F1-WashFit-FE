import classNames from 'classnames/bind';

import { useAccordion } from '@contexts/AccordionContext';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

interface AccordionBodyProps {
  children: React.ReactNode;
  label?: string;
  className?: string;
}

function AccordionBody({ children, label, className }: AccordionBodyProps) {
  const { activeItem } = useAccordion();

  return (
    <div className={cx('container', className, { showItem: label === activeItem, hideItem: label !== activeItem })}>
      {children}
    </div>
  );
}

export default AccordionBody;
