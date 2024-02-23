'use client';

import { useCallback, useEffect } from 'react';

import axios from 'axios';
import { useSearchParams } from 'next/navigation';

import { getRequest } from '@remote/api/requests/requests.api';

const GRANT_TYPE = 'authorization_code';

interface IKakaoToken {
  data: {
    access_token: string
    token_type: string
    refresh_token: string
    expires_in: number
    scope: string
    refresh_token_expires_in: number
  }
}

function KakaoPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  /* eslint-disable no-console */
  console.log(code, '인가 코드');

  const loginHandler = useCallback(async () => {
    const response = await axios.post<null, IKakaoToken>(
      `https://kauth.kakao.com/oauth/token?grant_type=${GRANT_TYPE}&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&code=${code}&client_secret=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET}`,
      {},
      {
        headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
      },
    );
    console.log(response.data.access_token, 'access_token');
    const accessToken = await getRequest<IKakaoToken>('/member/login/forKakao', {
      headers: {
        Authorization: response.data.access_token,
      },
    });
    // TODO: 리다이렉트 작업
    return accessToken;
  }, [code]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loginHandler();
  }, [code, loginHandler]);
  return (
    <div />
  );
}

export default KakaoPage;
