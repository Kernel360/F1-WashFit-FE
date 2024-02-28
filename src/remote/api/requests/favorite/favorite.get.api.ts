import { SearchFilterType } from '@/constants/searchByMap';

import { ProductListInfoType } from '../../types/home';
import { getRequest } from '../requests.api';

/* ----- like 제품 목록 api ----- */
export const getFavoriteList = async (
  pageNum: number,
  size: number,
  sortType: SearchFilterType,
) => {
  const response = await getRequest<ProductListInfoType>(`/likes?&sortType=${sortType}&page=${pageNum}&size=${size}`);

  return response;
};
