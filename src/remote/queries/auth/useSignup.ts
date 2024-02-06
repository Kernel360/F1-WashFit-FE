import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { signup } from '@remote/api/requests/auth/auth.post.api';

function useSignup() {
  const router = useRouter();

  const onSuccess = () => {
    router.push('/login');
  };

  return useMutation({ mutationFn: signup, onSuccess });
}

export default useSignup;
