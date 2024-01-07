import { useCallback, useMemo, useState } from 'react';

import AccordionContext from '@contexts/AccordionContext';

import AccordionBody from './body';
import AccordionHeader from './header';
import AccordionItem from './item';

function Accordion({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  const [activeItem, setActiveItem] = useState('');

  const changeActiveItem = useCallback((value: string) => {
    if (activeItem !== value) setActiveItem(value);
    if (activeItem === value) setActiveItem('');
  }, [setActiveItem, activeItem]);

  const values = useMemo(() => {
    return {
      activeItem,
      changeSelectedItem: changeActiveItem,
    };
  }, [activeItem, changeActiveItem]);

  return (
    <AccordionContext.Provider value={values}>
      {children}
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export default Accordion;
