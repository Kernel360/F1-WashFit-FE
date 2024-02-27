import { getRequest } from '../requests.api';

/* ----- 아이디 중복 확인 ----- */
export const getCheckId = async (id: string) => {
  const response = await getRequest<boolean>(`/member/duplicatedCheckId/${id}`);

  return response;
};
/* ----- 이메일 중복 확인 ----- */
export const getCheckEmail = async (email: string) => {
  const response = await getRequest<boolean>(`/member/duplicatedCheckEmail/${email}`);

  return response;
};
