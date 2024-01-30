import type { Meta, StoryObj } from '@storybook/react';

import Spacing from './Spacing';

const meta = {
  title: 'Shared/Spacing',
  component: Spacing,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Spacing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    size: 10,
    backgroundColor: 'primary500',
  },
};

export const Vertical: Story = {
  args: {
    size: 100,
    direction: 'vertical',
    backgroundColor: 'gray400',
  },
};
