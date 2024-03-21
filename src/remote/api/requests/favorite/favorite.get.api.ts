/* eslint-disable max-len */
import { SearchFilterType } from '@/constants/searchByMap';

import { ProductListInfoType } from '../../types/home';
import { deleteRequest, getRequest, postRequest } from '../requests.api';

/* ----- like 제품 목록 api ----- */
export const getFavoriteList = async (
  pageNum: number,
  size: number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  sortType: SearchFilterType
) => {
  // TODO: 필터 기능 추가
  // const response = await getRequest<ProductListInfoType>(`/likes/search?sortType=${sortType}&page=${pageNum}&size=${size}`);
  const response = await getRequest<ProductListInfoType>(`/likes/search?page=${pageNum}&size=${size}`);

  return response;
};

/* ----- like 제품 추가 api ----- */

export const postFavoriteList = async (productNo: number) => {
  const response = await postRequest<ProductListInfoType, null>(`/likes?productNo=${productNo}`);
  return response;
};

/* ----- like 제품 제거 api ----- */

export const delFavoriteList = async (productNo: number) => {
  const response = await deleteRequest<ProductListInfoType>(`/likes?productNo=${productNo}`);
  return response;
};
