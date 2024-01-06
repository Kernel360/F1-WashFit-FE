import type { Meta, StoryObj } from '@storybook/react';

import TextField from './TextField';

const meta = {
  title: 'Shared/TextField',
  component: TextField,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    hasError: { control: 'boolean' },
    helpMessage: { control: 'text' },
    required: { control: 'boolean' },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const normal: Story = {
  args: {
    label: '아이디',
    hasError: false,
    helpMessage: '중복된 아이디입니다.',
    required: false,
  },
};
export const required: Story = {
  args: {
    label: '아이디',
    hasError: false,
    helpMessage: '중복된 아이디입니다.',
    required: true,
  },
};
export const error: Story = {
  args: {
    label: '아이디',
    hasError: true,
    helpMessage: '중복된 아이디입니다.',
    required: true,
  },
};
