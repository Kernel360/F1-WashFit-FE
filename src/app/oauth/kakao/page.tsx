'use client';

import { useCallback, useEffect } from 'react';

import { useSearchParams } from 'next/navigation';

import { getRequest } from '@/remote/api/requests/requests.api';

function KakaoPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  /* eslint-disable no-console */
  console.log(code);

  const loginHandler = useCallback(
    async (authCode: string) => {
      // 백엔드에 전송
      const response = await getRequest('/member/login/forKakao', {
        method: 'get',
        headers: {
          Authorization: authCode,
        },
      });

      return response;
    },
    [],
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loginHandler(code!);
  }, [code, loginHandler]);
  return (
    <div />
  );
}

export default KakaoPage;
