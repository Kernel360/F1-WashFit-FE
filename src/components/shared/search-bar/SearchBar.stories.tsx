import type { Meta, StoryObj } from '@storybook/react';

import SearchBar from './SearchBar';

const meta = {
  title: 'Shared/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  args: {
    isShadow: false,
  },
  argTypes: {
    isShadow: { control: 'boolean' },
  },
}satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MapPage:Story = {
  args: {
    isShadow: true,
  },
};

export const SearchPage:Story = {
  args: {
    isShadow: false,
  },
};
