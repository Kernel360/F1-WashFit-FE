import type { Meta, StoryObj } from '@storybook/react';

import Banner from './Banner';

const meta = {
  title: 'Shared/Banner',
  component: Banner,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
    bannerData: {
      control: 'object',
    },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AdBanner: Story = {
  args: {
    bannerData: [{
      id: 1, link: '/', src: '/assets/banner.png', alt: '그림',
    },
    {
      id: 2, link: '/', src: '/assets/banner.png', alt: '그림',
    },
    {
      id: 3, link: '/', src: '/assets/banner.png', alt: '그림',
    },
    {
      id: 4, link: '/', src: '/assets/banner.png', alt: '그림',
    }],
  },
};
