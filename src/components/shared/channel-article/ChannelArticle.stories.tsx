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
      kind: 'youtube#searchResult',
      etag: 'i-sG7rj1PtNaac8brdj3rINn5zk',
      id: {
        kind: 'youtube#video',
        videoId: '3S52IFmBJCk',
      },
      snippet: {
        publishedAt: '2024-02-26T10:00:04Z',
        channelId: 'UCJM63e_MydEL2o6dMuJ_teQ',
        title: '미국에서 막노동부터 다시 시작하는 독일 엔지니어 작업트럭 세차 | 2화 (역대급 도요타 조작사건 미국 반응)',
        description: '성진 옵티마 스팀기 구입처 경유모델: http://xd.sjecorp.co.kr 전기모델: http://xe12k.sjecorp.co.kr http://xe18k.sjecorp.co.kr ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/3S52IFmBJCk/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/3S52IFmBJCk/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/3S52IFmBJCk/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: '세차요정 밋돌세 Detail Wizard',
        liveBroadcastContent: 'none',
        publishTime: '2024-02-26T10:00:04Z',
      },
    },
  },
};
