/* eslint-disable no-console */
import { useMutation } from '@tanstack/react-query';

import useModal from '@contexts/ModalContext';
import { findId } from '@remote/api/requests/auth/auth.post.api';

function useFindId() {
  const { open } = useModal();
  return useMutation({
    mutationFn: findId,
    onError: () => {
      open({
        title: '아이디 찾기',
        description: '다시 입력해주세요',
        leftButtonLabel: '닫기',
        onLeftButtonClick: () => { },
      });
    },
  });
}

export default useFindId;
