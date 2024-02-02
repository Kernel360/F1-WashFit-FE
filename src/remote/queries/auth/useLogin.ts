import { useCookies } from 'react-cookie';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { login } from '@remote/api/requests/auth/auth.post.api';
import { UserInfoType } from '@remote/api/types/auth';
import { useAppDispatch } from '@stores/hooks';
import { setUserId } from '@stores/slices/userSlice';

function useLogin() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie] = useCookies(['token']);

  const onSuccess = (data : UserInfoType) => {
    const { id, jwtToken } = data.value;
    const cookieOptions = { path: '/', maxAge: 60 * 15 };

    setCookie('token', jwtToken, cookieOptions);
    dispatch(setUserId(id));
    router.push('/');
  };

  return useMutation({
    mutationFn: login,
    onSuccess,
  });
}

export default useLogin;
