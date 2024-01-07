import type { Meta, StoryObj } from '@storybook/react';

import SearchBar from './SearchBar';

const meta = {
  title: 'Shared/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  args: {
    isMainPage: false,
  },
  argTypes: {
    isMainPage: { control: 'boolean' },
  },
}satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainPage:Story = {
  args: {
    isMainPage: true,
  },
};

export const SearchPage:Story = {
  args: {
    isMainPage: false,
  },
};
