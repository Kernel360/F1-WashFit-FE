import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { useAppDispatch } from '@stores/hooks';
import { clearUserId } from '@stores/slices/userSlice';
import { removeCookie } from '@utils/cookies';

function useLoggedOut() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const query = useQueryClient();

  const logout = (redirectPath = '/') => {
    router.push(redirectPath);
    removeCookie('token', { path: '/' });
    query.clear();
    dispatch(clearUserId());
  };

  return logout;
}

export default useLoggedOut;
