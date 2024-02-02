/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-console */

import { useMutation } from '@tanstack/react-query';

import { login } from '@remote/api/requests/auth/auth.post.api';
import { useAppDispatch } from '@stores/hooks';
import { setUserId } from '@stores/slices/userSlice';

function useLogin() {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const { id, jwtToken } = data.value;
      console.log(jwtToken); // TODO: cookie에 저장
      dispatch(setUserId(id));
      // TODO: 메인페이지로 이동
    },
  });
}

export default useLogin;
