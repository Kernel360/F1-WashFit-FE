import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

const meta = {
  title: 'Shared/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
  },
  argTypes: {
    isTransparent: { control: 'boolean' },
    title: { control: 'string' },
    type: { control: 'string' },
  },
}satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainPage:Story = {
  args: {
    type: 'home',
    isTransparent: false,
  },
};

export const FavoritePage:Story = {
  args: {
    type: 'favorite',
    isTransparent: false,
    title: '즐겨찾기',
  },
};

export const CarInfoPage:Story = {
  args: {
    isTransparent: false,
    title: '나의 차량 정보',
  },
};

export const CarWashInfoPage:Story = {
  args: {
    isTransparent: false,
    title: '나의 세차 정보',
  },
};

export const MapPage:Story = {
  args: {
    isTransparent: true,
  },
};

export const ProductPage:Story = {
  args: {
    type: 'product',
    isTransparent: false,
    title: '상세정보',
  },
};
