import {
  forwardRef, useCallback, useMemo, useState,
} from 'react';

import AccordionContext from '@/contexts/AccordionContext';

import { AccordionProps } from './type/accordion.type';

// eslint-disable-next-line max-len
const Accordion = forwardRef<HTMLDivElement, AccordionProps>(({ defaultActiveItems = [], children, ...props }, ref) => {
  const [activeItems, setActiveItems] = useState<string[]>(defaultActiveItems);

  const handleSetActiveItem = useCallback((item: string) => {
    if (activeItems?.includes(item)) {
      setActiveItems(activeItems.filter((activeItem) => { return activeItem !== item; }));
    } else {
      setActiveItems([...activeItems, item]);
    }
  }, [activeItems]);

  const values = useMemo(() => {
    return {
      activeItems,
      setActiveItem: handleSetActiveItem,
    };
  }, [activeItems, handleSetActiveItem]);

  return (
    <AccordionContext.Provider value={values}>
      <div ref={ref} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
});

export default Accordion;
