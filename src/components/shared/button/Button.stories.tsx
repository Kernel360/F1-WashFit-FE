import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const largeprimary: Story = {
  args: {
    children: '로그인 하기',
    full: true,
    size: 'large',
  },
};

export const primary: Story = {
  args: {
    children: '로그인 하기',
    size: 'large',
  },
};

export const weakPrimary: Story = {
  args: {
    children: '로그인 하기',
    size: 'large',
  },
};

export const filter: Story = {
  args: {
    children: '조회순',
  },
};

export const gray: Story = {
  args: {
    children: '조회순',
  },
};
