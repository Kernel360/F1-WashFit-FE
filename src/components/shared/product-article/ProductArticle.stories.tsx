import type { Meta, StoryObj } from '@storybook/react';

import { MOCK_PRODUCT_LIST } from '@mocks/homeHandler/mocks';

import ProductArticle from './ProductArticle';

const meta: Meta = {
  title: 'Shared/ProductArticle',
  component: ProductArticle,
  tags: ['autodocs'],
  argTypes: {
    isRow: { control: 'boolean' },
    itemData: {
      control: 'object',
    },
  },
} satisfies Meta<typeof ProductArticle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainPage: Story = {
  args: {
    isRow: false,
    itemData: MOCK_PRODUCT_LIST,
  },
};

export const SearchPage: Story = {
  args: {
    isRow: true,
    itemData: MOCK_PRODUCT_LIST,
  },
};
