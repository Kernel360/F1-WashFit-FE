import { createContext, useContext } from 'react';

interface AccordionContextValue {
  activeItems: string[]
  setActiveItem: (item: string) => void
}

const AccordionContext = createContext<AccordionContextValue>({
  activeItems: [],
  setActiveItem: () => { },
});

export function useAccordion() {
  return useContext(AccordionContext);
}

export default AccordionContext;
