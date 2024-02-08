import type { Meta, StoryObj } from '@storybook/react';

import ColorPicker from './ColorPicker';

const meta = {
  title: 'details/ColorPicker',
  component: ColorPicker,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const black: Story = {
  args: {
    label: '검은색',
    value: '37383C',
    color: 'black',
  },
};

export const green: Story = {
  args: {
    label: '초록',
    value: '2F4F4F',
    color: 'green',
  },
};
