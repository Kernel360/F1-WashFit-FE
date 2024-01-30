import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta = {
  title: 'Shared/Text',
  component: Text,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    fontWeight: { control: 'select', options: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const t1: Story = {
  args: {
    typography: 't1',
    color: 'primary500',
    children: '안녕하세요',
  },
};

export const t3: Story = {
  args: {
    typography: 't3',
    color: 'gray400',
    children: '워시피디아',
  },
};

export const t7: Story = {
  args: {
    typography: 't7',
    color: 'red',
    children: '패스트캠퍼스',
  },
};
