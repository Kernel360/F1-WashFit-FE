/* ----- 로그인 MOCK DATA ----- */
export const MOCK_LOGIN_DATA = {
  status: 200,
  code: 'BMC002',
  message: '로그인 성공',
  value: {
    memberNo: 7251,
    id: 'stest0123',
    email: 'abcde123@naver.com',
    password: null,
    gender: 'woman',
    age: '30',
    createdAt: '2024-02-19',
    createdBy: 'admin',
    modifiedAt: '2024-02-19',
    modifiedBy: 'admin',
    jwtToken: 'test-abcdefg1234--abc',
  },
};

/* ----- 토큰 MOCK DATA ----- */
export const MOCK_TOKEN_DATA = {
  status: 202,
  code: 'success',
  message: '토큰 인증 성공',
  value: {
    jwtToken: 'success-test-abcdefg1234--abc',
  },
};
