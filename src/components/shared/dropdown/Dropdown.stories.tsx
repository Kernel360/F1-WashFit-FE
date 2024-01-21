import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from './Dropdown';

const meta = {
  title: 'Shared/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    options: {
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const YoutubeVideo: Story = {
  args: {
    type: 'favorite',
    selectedLabel: '최신순',
    options: [
      { label: '최신순', value: 'latest' },
      { label: '오래된순', value: 'oldest' },
    ],
    placeholder: '최신순',
    value: 'latest',
  },
};

export const SearchProduct: Story = {
  args: {
    type: 'favorite',
    selectedLabel: '조회순',
    options: [
      { label: '조회순', value: 'Viewed' },
      { label: '위반제품순', value: 'Violated' },
      { label: '최신순', value: 'latest' },
      { label: '추천순', value: 'Recommend' },
    ],
    placeholder: '조회순',
    value: 'Viewed',
  },
};
