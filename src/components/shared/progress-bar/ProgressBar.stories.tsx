import type { Meta, StoryObj } from '@storybook/react';

import ProgressBar from './ProgressBar';

const meta: Meta = {
  title: 'Shared/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    progressCount: {
      type: 'number',
      min: 1,
      max: 5,
      step: 1,
    },
    currentProgress: {
      control: {
        type: 'range',
        min: 1,
        max: 5,
        step: 1,
      },
    },
  },
}satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CarDetailInput: Story = {
  args: {
    progressCount: 5,
    currentProgress: 3,
  },
};

export const CarWashDetailInput: Story = {
  args: {
    progressCount: 3,
    currentProgress: 1,
  },
};

// CarWashDetailInput에 대한 argTypes를 따로 설정
CarWashDetailInput.argTypes = {
  progressCount: {
    type: 'number',
    min: 1,
    max: 5,
    step: 1,
  },
  currentProgress: {
    control: {
      type: 'range',
      min: 1,
      max: 3, // 원하는 max 값으로 설정
      step: 1,
    },
  },
};
