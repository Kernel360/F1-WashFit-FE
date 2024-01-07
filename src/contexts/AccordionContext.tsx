import { createContext, useContext } from 'react';

interface AccordionContextValue {
  activeItem: string
  changeSelectedItem: (item: string) => void
}

const AccordionContext = createContext<AccordionContextValue>({
  activeItem: '',
  changeSelectedItem: () => { },
});

export function useAccordion() {
  return useContext(AccordionContext);
}

export default AccordionContext;
