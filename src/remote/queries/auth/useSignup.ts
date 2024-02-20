import { toast } from 'react-toastify';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { signup } from '@remote/api/requests/auth/auth.post.api';

function useSignup() {
  const router = useRouter();

  const onSuccess = () => {
    router.push('/signup/complete');
  };

  const onError = (error: AxiosError) => {
    toast.error(error.message);
  };

  return useMutation({ mutationFn: signup, onSuccess, onError });
}

export default useSignup;
