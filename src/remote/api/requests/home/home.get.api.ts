import { HomeSortType } from '@components/home/filer-group/types/filterGroup.type';

import {
  BannerType, ProductListInfoType, RecommendProductsType,
} from '../../types/home';
import { getRequest } from '../requests.api';

/* ----- 배너 api ----- */
export const getBanner = async () => {
  const response = await getRequest<BannerType>('/banner');

  return response;
};

/* ----- 추천 제품 정보 api ----- */
export const getRecommendProducts = async () => {
  const response = await getRequest<RecommendProductsType>('/recommend_products');

  return response;
};

/* ----- 제품 목록 정보 api ----- */
export const getProductList = async (pageNum: number, size: number, sortType: HomeSortType) => {
  const response = await getRequest<ProductListInfoType>(`/products/rank?sortType=${sortType}&page=${pageNum}&size=${size}`);

  return response;
};
