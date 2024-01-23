import type { Meta, StoryObj } from '@storybook/react';

import ChannelArticle from './ChannelArticle';

const meta = {
  title: 'Shared/ChannelArticle',
  component: ChannelArticle,
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
    },
  },
} satisfies Meta<typeof ChannelArticle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const YoutubeVideo: Story = {
  args: {
    data: {
      id: 1,
      src: 'https://www.youtube.com/embed/TLPnEZFN3Z8?si=yGhuR7gYK8vZSJWv',
      alt: '유튜브 영상',
      profile: '/assets/profile.JPG',
      title: 'abcdefghijklmnopqrs',
      description: 'abcdefghijklmnopqrs',
    },
  },
};
