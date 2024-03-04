'use client';

import { useCallback, useEffect } from 'react';

import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';

import { getRequest } from '@remote/api/requests/requests.api';
import { UserInfoType } from '@remote/api/types/auth';
import { useAppDispatch } from '@stores/hooks';
import { setUserId } from '@stores/slices/userSlice';
import { setCookie } from '@utils/cookies';

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
  const router = useRouter();
  const dispatch = useAppDispatch();

  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const loginHandler = useCallback(async () => {
    try {
      const response = await axios.post<null, IKakaoToken>(
        `https://kauth.kakao.com/oauth/token?grant_type=${GRANT_TYPE}&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&code=${code}&client_secret=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET}`,
        {},
        {
          headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
        },
      );

      const data = await getRequest<UserInfoType>('/member/login/forKakao', {
        headers: {
          Authorization: response.data.access_token,
        },
      });

      const { id, email, jwtToken } = data.value;
      const cookieOptions = { path: '/', maxAge: 60 * 15 };

      setCookie('token', jwtToken, cookieOptions);
      dispatch(setUserId({ id, email }));
      router.push('/');
    } catch (e) {
      console.error(e);
    }
  }, [code, dispatch, router]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loginHandler();
  }, [code, loginHandler]);
  return (
    <div />
  );
}

export default KakaoPage;
