import type { Meta, StoryObj } from '@storybook/react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { withReactContext } from 'storybook-react-context';

import { ModalContext } from '@contexts/ModalContext';

import Modal from './Modal';

const meta = {
  title: 'Shared/Modal',
  decorators: [
    withReactContext({
      Context: ModalContext,
      initialState: {
        open: true,
        title: '탈퇴하시겠습니까?',
        description: '회원을 탈퇴하면 차량용품 추천 서비스를 제공받을 수 없습니다. 정말로 탈퇴하시겠습니까?',
        topButtonLabel: '예',
        bottomButtonLabel: '아니오',
        onTopButtonClick: () => { },
        onBottomButtonClick: () => { },
      },
    }),
  ],
  component: Modal,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const normal: Story = {
  args: {
    open: true,
    title: '탈퇴하시겠습니까?',
    description: '회원을 탈퇴하면 차량용품 추천 서비스를 제공받을 수 없습니다. 정말로 탈퇴하시겠습니까?',
    topButtonLabel: '예',
    bottomButtonLabel: '아니오',
    onTopButtonClick: () => { },
    onBottomButtonClick: () => { },
  },
};
