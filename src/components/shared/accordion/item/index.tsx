/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Children, cloneElement, isValidElement } from 'react';

interface AccordionItemProps {
  children: React.ReactNode[]
  label: string
  className?: string
}

function AccordionItem({ children, label, className }: AccordionItemProps) {
  const childrenArray = Children.toArray(children);

  const accordionItemChildren = childrenArray.map((child) => {
    if (isValidElement(child)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return cloneElement(child as any, { ...child.props, label });
    }
    return null;
  });

  return <div className={className}>{accordionItemChildren}</div>;
}

export default AccordionItem;
