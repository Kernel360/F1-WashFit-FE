import type { Meta, StoryObj } from '@storybook/react';

import FixedBottomButton from './FixedBottomButton';

const meta = {
  title: 'Shared/FixedBottomButton',
  component: FixedBottomButton,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof FixedBottomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const enabled: Story = {
  args: {
    onClick: () => { },
    disabled: true,
    children: '계속하기',
  },
};

export const disabled: Story = {
  args: {
    onClick: () => { },
    disabled: false,
    children: '계속하기',
  },
};
