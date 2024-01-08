import type { Meta, StoryObj } from '@storybook/react';

import Radio from './Radio';

const meta = {
  title: 'Shared/Radio',
  component: Radio,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const gender: Story = {
  args: {
    type: 'gender',
    label: '남성',
    value: 'male',
  },
};

export const ageGroup: Story = {
  args: {
    type: 'ageGroup',
    label: '10대',
    value: '10',
  },
};

export const additionalInfo: Story = {
  args: {
    type: 'additionalInfo',
    label: '소형',
    value: 'mini',
  },
};
