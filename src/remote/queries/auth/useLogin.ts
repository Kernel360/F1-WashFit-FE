import { useMutation } from '@tanstack/react-query';

import { login } from '@remote/api/requests/auth/auth.post.api';

function useLogin() {
  return useMutation({
    mutationFn: login,
    // eslint-disable-next-line no-console
    onSuccess: () => { console.log('요청 성공'); },
    onError: () => { console.error('에러 발생'); },
    // eslint-disable-next-line no-console
    onSettled: () => { console.log('결과에 관계 없이 무언가 실행됨'); },
  });
}

export default useLogin;
