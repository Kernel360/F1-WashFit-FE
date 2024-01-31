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
