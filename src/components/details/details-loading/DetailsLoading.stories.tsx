import type { Meta, StoryObj } from '@storybook/react';

import DetailsLoading from './DetailsLoading';

const meta = {
  title: 'details/DetailsLoading',
  component: DetailsLoading,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof DetailsLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultComponent: Story = {
  args: {

  },
};
