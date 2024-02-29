import { ICarDetails, ICarWashDetails } from '../../types/additional-info';
import { ICommon } from '../../types/common';
import { postRequest } from '../requests.api';

/* ----- 차량 정보 입력 api ----- */
export const postCarDetails = async ({
  segment, carType, color, driving, parking,
}: ICarDetails) => {
  const response = await postRequest<ICommon<null>, ICarDetails>('/member/car', {
    segment, carType, color, driving, parking,
  });

  return response;
};

/* ----- 세차 용품 정보 입력 api ----- */
export const postCarWashDetails = async ({
  frequency, cost, interest,
}: ICarWashDetails) => {
  const response = await postRequest<ICommon<null>, ICarWashDetails>('/member/wash', {
    frequency, cost, interest,
  });

  return response;
};
