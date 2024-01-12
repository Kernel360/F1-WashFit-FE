import { ISignUp } from '../../types/auth';
import { postRequest } from '../requests.api';

export const signup = async ({
  id, password, email, gender, age,
}: ISignUp) => {
  const response = await postRequest<null, ISignUp>('/member/join', {
    id, password, email, gender, age,
  });

  return response;
};
