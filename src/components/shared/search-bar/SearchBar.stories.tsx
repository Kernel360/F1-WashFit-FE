import type { Meta, StoryObj } from '@storybook/react';

import SearchBar from './SearchBar';

const meta = {
  title: 'Shared/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  args: {
    isWhite: false,
  },
  argTypes: {
    isWhite: { control: 'boolean' },
  },
}satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainPage:Story = {
  args: {
    isWhite: false,
  },
};

export const SearchPage:Story = {
  args: {
    isWhite: false,
  },
};

export const MapPage:Story = {
  args: {
    isWhite: true,
  },
};
