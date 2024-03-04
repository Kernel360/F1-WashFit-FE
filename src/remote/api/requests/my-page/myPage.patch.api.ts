import { IUpdateProfile } from '../../types/auth';
import { ICommon } from '../../types/common';
import { patchRequest } from '../requests.api';

/* ----- 내 정보 조회 ----- */
export const updateProfile = async ({ gender, age }: IUpdateProfile) => {
  const response = await patchRequest<ICommon<null>, IUpdateProfile>('/mypage/member', {
    gender,
    age,
  });

  return response;
};
