import { toast } from 'react-toastify';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { findPassword } from '@remote/api/requests/auth/auth.post.api';

function useFindPassword() {
  const onError = (error: AxiosError) => {
    if (error.response?.status === 400) {
      toast.error('유효하지 않은 아이디입니다.');
    }
  };
  return useMutation({ mutationFn: findPassword, onError });
}

export default useFindPassword;
