import { toast } from 'react-toastify';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { resetPassword } from '@remote/api/requests/auth/auth.post.api';

function useResetPassword() {
  const router = useRouter();
  const onSuccess = () => {
    router.push('/reset-password/complete');
  };
  const onError = () => {
    toast.error('비밀번호를 다시 입력해주세요.');
  };
  return useMutation({ mutationFn: resetPassword, onSuccess, onError });
}

export default useResetPassword;
