import type { Meta, StoryObj } from '@storybook/react';

import HomeSearchBar from './HomeSearchBar';

const meta = {
  title: 'Shared/HomeSearchBar',
  component: HomeSearchBar,
  tags: ['autodocs'],
  args: {
    isShadow: false,
  },
  argTypes: {
    isShadow: { control: 'boolean' },
  },
} satisfies Meta<typeof HomeSearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MapPage: Story = {
  args: {
    isShadow: true,
  },
};

export const SearchPage: Story = {
  args: {
    isShadow: false,
  },
};
