import type { Meta, StoryObj } from '@storybook/react';

import Skeleton from './Skeleton';

const meta = {
  title: 'Shared/Skeleton',
  component: Skeleton,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const t1: Story = {
  args: {
    width: 300,
    height: 200,
  },
};
