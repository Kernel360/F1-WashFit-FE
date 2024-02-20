// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';

import { MOCK_LOGIN_DATA, MOCK_TOKEN_DATA } from './mocks';

export const authHandlers = [
  /* ----- 회원가입 api ----- */
  http.post(`${process.env.NEXT_PUBLIC_BASE_URL}/member/join`, () => {
    return HttpResponse.json('회원가입 성공!!');
  }),

  /* ----- 로그인 api ----- */
  http.post(`${process.env.NEXT_PUBLIC_BASE_URL}/member/login`, () => {
    return HttpResponse.json(MOCK_LOGIN_DATA);
  }),

  /* ----- 토큰 재발급 api  ----- */
  http.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/reissuanceJWT`, ({ cookies }) => {
    if (cookies.token !== MOCK_TOKEN_DATA.value.jwtToken) {
      return HttpResponse.error();
    }

    return HttpResponse.json(MOCK_TOKEN_DATA);
  }),

];
