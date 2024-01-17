import type { Meta, StoryObj } from '@storybook/react';

import RecommandList from './RecommandList';

const meta = {
  title: 'Shared/RecommandList',
  component: RecommandList,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
    recommandListData: {
      control: 'object',
    },
  },
} satisfies Meta<typeof RecommandList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AdBanner: Story = {
  args: {
    recommandListData: [
      {
        id: 1,
        link: '/',
        src: '/assets/recommandItem1.png',
        alt: '그림',
        productName: '카샴푸',
      },
      {
        id: 2,
        link: '/',
        src: '/assets/recommandItem2.png',
        alt: '그림',
        productName: '휠 클리너',
      },
      {
        id: 3,
        link: '/',
        src: '/assets/recommandItem3.png',
        alt: '그림',
        productName: '타올',

      },
      {
        id: 4,
        link: '/',
        src: '/assets/recommandItem4.png',
        alt: '그림',
        productName: '먼지털이개',

      },
      {
        id: 5,
        link: '/',
        src: '/assets/recommandItem4.png',
        alt: '그림',
        productName: '먼지털이개',

      },
      {
        id: 6,
        link: '/',
        src: '/assets/recommandItem4.png',
        alt: '그림',
        productName: '먼지털이개',

      },
    ],
  },
};
