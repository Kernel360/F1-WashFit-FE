import {
  ChangePassword,
  FindId, FindPassword, ISignIn, ISignUp, UserInfoType,
} from '../../types/auth';
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

export const findId = async ({
  email,
}: FindId) => {
  const response = await postRequest<null, FindId>('/member/find-id', {
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

export const changePassword = async ({
  password,
}: ChangePassword) => {
  const response = await putRequest<null, ChangePassword>('/member/change-password', {
    password,
  });

  return response;
};
