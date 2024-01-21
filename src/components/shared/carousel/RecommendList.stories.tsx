import type { Meta, StoryObj } from '@storybook/react';

import RecommendList from './RecommendList';

const meta = {
  title: 'Shared/RecommendList',
  component: RecommendList,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
    recommendListData: {
      control: 'object',
    },
  },
} satisfies Meta<typeof RecommendList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AdBanner: Story = {
  args: {
    recommendListData: [
      {
        id: 1,
        link: '/',
        src: '/assets/recommendItem1.png',
        alt: '그림',
        productName: '카샴푸',
      },
      {
        id: 2,
        link: '/',
        src: '/assets/recommendItem2.png',
        alt: '그림',
        productName: '휠 클리너',
      },
      {
        id: 3,
        link: '/',
        src: '/assets/recommendItem3.png',
        alt: '그림',
        productName: '타올',

      },
      {
        id: 4,
        link: '/',
        src: '/assets/recommendItem4.png',
        alt: '그림',
        productName: '먼지털이개',

      },
      {
        id: 5,
        link: '/',
        src: '/assets/recommendItem4.png',
        alt: '그림',
        productName: '먼지털이개',

      },
      {
        id: 6,
        link: '/',
        src: '/assets/recommendItem4.png',
        alt: '그림',
        productName: '먼지털이개',

      },
    ],
  },
};
