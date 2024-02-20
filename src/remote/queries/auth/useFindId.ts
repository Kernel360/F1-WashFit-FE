/* eslint-disable @typescript-eslint/no-floating-promises */
import { toast } from 'react-toastify';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

import { findId } from '@remote/api/requests/auth/auth.post.api';

function useFindId() {
  const router = useRouter();
  return useMutation({
    mutationFn: findId,
    onSuccess: () => {
      router.push('/find-id/complete');
    },
    onError: (error: AxiosError) => {
      toast.error(error.message);
    },
  });
}

export default useFindId;
