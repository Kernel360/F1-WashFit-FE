/* eslint-disable max-len */
import { SearchFilterType } from '@/constants/searchByMap';

import { ProductListInfoType } from '../../types/home';
import { getRequest } from '../requests.api';

/* ----- like 제품 목록 api ----- */
export const getFavoriteList = async (
  pageNum: number,
  size: number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  sortType: SearchFilterType,
) => {
  // TODO: 필터 기능 추가
  // const response = await getRequest<ProductListInfoType>(`/likes/search?sortType=${sortType}&page=${pageNum}&size=${size}`);
  const response = await getRequest<ProductListInfoType>(`/likes/search?page=${pageNum}&size=${size}`);

  return response;
};
