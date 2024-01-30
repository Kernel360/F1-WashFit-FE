import type { Meta, StoryObj } from '@storybook/react';

import { MOCK_RECOMMEND_PRODUCTS } from '@mocks/homeHandler/mocks';

import RecommendList from './RecommendList';

const meta = {
  title: 'Shared/RecommendList',
  component: RecommendList,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof RecommendList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AdBanner: Story = {
  args: {
    recommendProductsData: MOCK_RECOMMEND_PRODUCTS,
  },
};
