export interface ISignIn {
  id: string
  password: string
}

export interface ISignUp extends ISignIn {
  email: string
  gender: string | null
  age: string | null
}

export type FindPassword = Pick<ISignIn, 'id'>;

export type FindId = Pick<ISignUp, 'email'>;
