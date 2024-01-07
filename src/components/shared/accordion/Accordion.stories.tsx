/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
import type { Meta, StoryObj } from '@storybook/react';

import Minus from '@components/icons/Minus';
import Plus from '@components/icons/Plus';

import Accordion from './Accordion';

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
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    children: <>
      <Accordion.Item label="1">
        <Accordion.Header openIcon={<Plus />} closeIcon={<Minus />}>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item label="2">
        <Accordion.Header openIcon={<Plus />} closeIcon={<Minus />}>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </>,
  },
};
