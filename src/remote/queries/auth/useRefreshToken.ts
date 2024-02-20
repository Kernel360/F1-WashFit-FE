/* eslint-disable no-console */
import { useCookies } from 'react-cookie';

import { useMutation } from '@tanstack/react-query';

import useLoggedOut from '@/hooks/useLoggedOut';
import { refreshToken } from '@remote/api/requests/auth/auth.post.api';
import { RefreshTokenType } from '@remote/api/types/auth';

function useRefreshToken() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const handleLogout = useLoggedOut('/login');

  const onSuccess = (data: RefreshTokenType) => {
    const { jwtToken } = data.value;
    const cookieOptions = { path: '/', maxAge: 60 * 15 };

    setCookie('token', jwtToken, cookieOptions);
  };

  const onError = () => {
    handleLogout('/login');
  };

  return useMutation({
    mutationFn: refreshToken,
    onSuccess,
    onError,
  });
}

export default useRefreshToken;
