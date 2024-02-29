/* eslint-disable @typescript-eslint/no-floating-promises */
import { toast } from 'react-toastify';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { findId } from '@remote/api/requests/auth/auth.post.api';

function useFindId() {
  const router = useRouter();
  return useMutation({
    mutationFn: findId,
    onSuccess: () => {
      router.push('/find-id/complete');
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) {
        toast.error('유효하지 않은 이메일입니다.');
        return;
      }
      toast.error('이메일 요청을 실패하였습니다');
    },
  });
}

export default useFindId;
