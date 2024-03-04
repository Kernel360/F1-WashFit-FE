import { UserInfoType } from '../../types/auth';
import { getRequest } from '../requests.api';

/* ----- 내 정보 조회 ----- */
export const getProfile = async () => {
  const response = await getRequest<UserInfoType>('/mypage/member');

  return response;
};
