import { ICommonType } from './common';

export interface ISignIn {
  id: string
  password: string
}

export interface ISignUp extends ISignIn {
  email: string
  gender: string
  age: string
}

export type FindId = Pick<ISignUp, 'email'>;

export type FindPassword = Pick<ISignUp, 'id'>;

export type ChangePassword = Pick<ISignUp, 'password'>;

// 로그인 성공시 res
export interface IUserInfo {
  age: string
  createdAt: string
  createdBy: string
  email: string
  gender: string
  id: string
  jwtToken: string
  memberNo: number
  modifiedAt: string
  modifiedBy: string
  password: null
}

export type UserInfoType = ICommonType<IUserInfo>;
