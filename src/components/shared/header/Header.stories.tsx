import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

const meta = {
  title: 'Shared/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
  },
  argTypes: {
    isDisplayLogo: { control: 'boolean' },
    isTransparent: { control: 'boolean' },
    children: { control: 'string' },
    displayRightIconType: { control: 'string' },
  },
}satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainPage:Story = {
  args: {
    isDisplayLogo: true,
    isTransparent: false,
    displayRightIconType: 'search',
  },
};

export const OtherPage:Story = {
  args: {
    isDisplayLogo: false,
    isTransparent: false,
  },
};

export const FavoritePage:Story = {
  args: {
    isDisplayLogo: false,
    isTransparent: false,
    children: '즐겨찾기',
  },
};

export const CarInfoPage:Story = {
  args: {
    isDisplayLogo: false,
    isTransparent: false,
    children: '나의 차량 정보',
  },
};

export const CarWashInfoPage:Story = {
  args: {
    isDisplayLogo: false,
    isTransparent: false,
    children: '나의 세차 정보',
  },
};

export const MapPage:Story = {
  args: {
    isDisplayLogo: false,
    isTransparent: true,
  },
};

export const ProductPage:Story = {
  args: {
    isDisplayLogo: false,
    isTransparent: false,
    children: '홈',
    displayRightIconType: 'heartShare',
  },
};
