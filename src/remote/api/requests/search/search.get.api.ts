import { SearchFilterType } from '@/constants/searchByMap';

import { ProductListInfoType } from '../../types/home';
import { getRequest } from '../requests.api';

/* ----- 제품 키워드 검색 api ----- */
export const getSearchProductByFilter = async (
  keyword: string,
  pageNum: number,
  size: number,
  sortType: SearchFilterType,
) => {
  const response = await getRequest<ProductListInfoType>(`/products/search?keyword=${keyword}&sortType=${sortType}&page=${pageNum}&size=${size}`);

  return response;
};
