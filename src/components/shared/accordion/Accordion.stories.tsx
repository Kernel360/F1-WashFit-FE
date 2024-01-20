import type { Meta } from '@storybook/react';

import Minus from '@components/icons/Minus';
import Plus from '@components/icons/Plus';
import Text from '@shared/text/Text';

import Accordion from './Accordion';
import AccordionBody from './body/AccordionBody';
import AccordionHeader from './header/AccordionHeader';
import AccordionItem from './item/AccordionItem';

const meta = {
  title: 'Shared/Accordion',
  component: Accordion,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Accordion>;

export default meta;

export const AccordionStory = {
  render: () => {
    return (
      <Accordion defaultActiveItems={['']}>
        <AccordionItem itemName="목록1">
          <AccordionHeader openIcon={<Plus />} closeIcon={<Minus />}>
            <Text>
              목록1
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            </Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem itemName="목록2">
          <AccordionHeader>
            <Text>
              목록2
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    );
  },
};
