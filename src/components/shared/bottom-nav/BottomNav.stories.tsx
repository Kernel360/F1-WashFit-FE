import type { Meta, StoryObj } from '@storybook/react';

import BottomNav from './BottomNav';

const meta = {
  title: 'Shared/BottomNav',
  component: BottomNav,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof BottomNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
  },
};
