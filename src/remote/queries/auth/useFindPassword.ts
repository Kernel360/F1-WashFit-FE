import { toast } from 'react-toastify';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { findPassword } from '@remote/api/requests/auth/auth.post.api';

function useFindPassword() {
  const router = useRouter();
  const onSuccess = () => {
    toast.success('이메일이 전송되었습니다.');
    router.push('/login');
  };

  const onError = (error: AxiosError) => {
    if (error.response?.status === 400) {
      toast.error('유효하지 않은 아이디입니다.');
    } else {
      toast.error('서버 에러입니다');
    }
  };
  return useMutation({ mutationFn: findPassword, onSuccess, onError });
}

export default useFindPassword;
