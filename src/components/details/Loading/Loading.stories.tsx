import type { Meta, StoryObj } from '@storybook/react';

import Loading from './Loading';

const meta = {
  title: 'details/Loading',
  component: Loading,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultComponent: Story = {
  args: {

  },
};
