import type { Meta, StoryObj } from '@storybook/react';

import { MOCK_BANNER_DATA } from '@mocks/homeHandler/mocks';

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
    bannerData: MOCK_BANNER_DATA,
  },
};
