import { useCookies } from 'react-cookie';

import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { useAppDispatch } from '@stores/hooks';
import { clearUserId } from '@stores/slices/userSlice';

function useLoggedOut() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const query = useQueryClient();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, removeCookie] = useCookies(['token']);

  const logout = (redirectPath = '/') => {
    dispatch(clearUserId());
    removeCookie('token', { path: '/' });
    query.clear();
    router.push(redirectPath);
  };

  return logout;
}

export default useLoggedOut;
