import type { Meta, StoryObj } from '@storybook/react';

import Carousel from './Carousel';

const meta = {
  title: 'Shared/Carousel',
  component: Carousel,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
    },
    aspectRatio: { control: 'number' },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AdBanner: Story = {
  args: {
    data: [{
      id: 1, link: '/', src: '/assets/banner.png', alt: '그림',
    }, {
      id: 2, link: '/', src: '/assets/banner.png', alt: '그림',
    },
    {
      id: 3, link: '/', src: '/assets/banner.png', alt: '그림',
    },
    {
      id: 4, link: '/', src: '/assets/banner.png', alt: '그림',
    }],
    aspectRatio: 1,
  },
};

export const RecommandProduct: Story = {
  args: {
    data: [{
      id: 1, link: '/', src: '/assets/banner.png', alt: '그림',
    }, {
      id: 2, link: '/', src: '/assets/banner.png', alt: '그림',
    },
    {
      id: 3, link: '/', src: '/assets/banner.png', alt: '그림',
    },
    {
      id: 4, link: '/', src: '/assets/banner.png', alt: '그림',
    }],
    slidesPerView: 3,
    spaceBetween: 10,
    aspectRatio: 1,
  },
};
