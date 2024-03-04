import {
  ChangePassword,
  FindId, FindPassword, RefreshTokenType, ISignIn, ISignUp, UserInfoType, IResetPassword,
} from '../../types/auth';
import { ICommon } from '../../types/common';
import { postRequest, putRequest } from '../requests.api';

export const signup = async ({
  id, password, email, gender, age,
}: ISignUp) => {
  const response = await postRequest<null, ISignUp>('/member/join', {
    id, password, email, gender, age,
  });

  return response;
};

export const login = async ({
  id, password,
}: ISignIn) => {
  const response = await postRequest<UserInfoType, ISignIn>('/member/login', {
    id, password,
  });

  return response;
};

export const refreshToken = async () => {
  const response = await postRequest<RefreshTokenType, null>('/auth/reissuanceJWT');

  return response;
};

export const findId = async ({
  email,
}: FindId) => {
  const response = await postRequest<ICommon<null>, FindId>('/member/find-memberId', {
    email,
  });

  return response;
};

export const findPassword = async ({
  id,
}: FindPassword) => {
  const response = await postRequest<null, FindPassword>('/member/find-password', {
    id,
  });

  return response;
};

/* ----- 회원 비밀번호 찾기 ----- */
export const changePassword = async ({
  password,
}: ChangePassword) => {
  const response = await putRequest<null, ChangePassword>('/mypage/change-password', {
    password,
  });

  return response;
};

/* ----- 비회원 비밀번호 찾기 ----- */
export const resetPassword = async ({
  password, token = '',
}: IResetPassword) => {
  const response = await putRequest<null, IResetPassword>('/member/reset-password', {
    password, token,
  });

  return response;
};
