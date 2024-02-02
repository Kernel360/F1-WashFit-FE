import { useCookies } from 'react-cookie';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { login } from '@remote/api/requests/auth/auth.post.api';
import { useAppDispatch } from '@stores/hooks';
import { setUserId } from '@stores/slices/userSlice';

function useLogin() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie] = useCookies(['token']);

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const { id, jwtToken } = data.value;
      setCookie('token', jwtToken, { path: '/', maxAge: 60 * 15 });
      dispatch(setUserId(id));
      router.push('/');
    },
  });
}

export default useLogin;
