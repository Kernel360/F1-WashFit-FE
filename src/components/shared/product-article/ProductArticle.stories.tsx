import type { Meta, StoryObj } from '@storybook/react';

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
}satisfies Meta<typeof ProductArticle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainPage: Story = {
  args: {
    isRow: false,
    itemData: {
      id: 1,
      img: '/assets/profile.JPG',
      name: '아머올 세차용품 스피드 왁스 스프레이 500ml스피드 왁스 스프레이 500ml',
      brand: '카믹스',
      category: '코팅제',
      warningLevel: 'warning',
    },
  },
};

export const SearchPage: Story = {
  args: {
    isRow: true,
    itemData: {
      id: 2,
      img: '/assets/profile.JPG',
      name: '아머올 세차용품 스피드 왁스 스프레이 500ml',
      brand: '카믹스',
      category: '코팅제',
      warningLevel: 'safe',
    },
  },
};
