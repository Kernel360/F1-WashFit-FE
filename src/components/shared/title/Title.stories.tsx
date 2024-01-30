import type { Meta, StoryObj } from '@storybook/react';

import Pen from '@components/icons/Pen';

import Title from './Title';

const meta = {
  title: 'Shared/Title',
  component: Title,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
    descriptionColor: { control: 'color' },
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const signupPage: Story = {
  args: {
    title: '회원가입이\n완료되었습니다.',
    description: '부가정보를 입력하시면, 차량별 맞춤\n차량용품 추천 서비스를 제공받을 수 있습니다.',
    descriptionColor: 'primary500',
  },
};

export const loginInfoPage: Story = {
  args: {
    title: '나의 차량 정보',
  },
};

export const carInfoPage: Story = {
  args: {
    title: '나의 세차 정보',
    titleIcon: <Pen size={30} />,
  },
};
