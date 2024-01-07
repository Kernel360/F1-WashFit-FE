import {
  Children, cloneElement, isValidElement, ReactNode,
} from 'react';

interface AccordionItemProps {
  children: ReactNode[]
  label: string
  className?: string
}

function AccordionItem({ children, label, className }: AccordionItemProps) {
  const childrenArray = Children.toArray(children);

  const accordionItemChildren = childrenArray.map((child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { ...child.props, label });
    }
    return null;
  });

  return <div className={className}>{accordionItemChildren}</div>;
}

export default AccordionItem;
