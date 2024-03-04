import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { login } from '@remote/api/requests/auth/auth.post.api';
import { UserInfoType } from '@remote/api/types/auth';
import { useAppDispatch } from '@stores/hooks';
import { setUserId } from '@stores/slices/userSlice';
import { setCookie } from '@utils/cookies';

function useLogin() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSuccess = (data: UserInfoType) => {
    const { id, email, jwtToken } = data.value;
    const cookieOptions = { path: '/', maxAge: 60 * 15 };

    setCookie('token', jwtToken, cookieOptions);
    dispatch(setUserId({ id, email }));
    router.push('/');
  };

  return useMutation({
    mutationFn: login,
    onSuccess,
  });
}

export default useLogin;
