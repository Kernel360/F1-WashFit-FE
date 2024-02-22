import { ProductListInfoType } from '../../types/home';
import { getRequest } from '../requests.api';

/* ----- like 제품 목록 api ----- */
export const getFavoriteList = async () => {
  const response = await getRequest<ProductListInfoType>('/likes');

  return response;
};
