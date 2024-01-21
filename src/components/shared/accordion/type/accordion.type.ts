export type AccordionProps = {
  defaultActiveItems?: string[]
  children: React.ReactNode | React.ReactNode[]
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export type AccordionItemProps = {
  children: React.ReactNode[]
  itemName: string
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export type AccordionHeaderProps = {
  itemName?: string
  openIcon?: React.ReactNode
  closeIcon?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type AccordionBodyProps = {
  itemName?: string
} & React.HTMLAttributes<HTMLDivElement>;
