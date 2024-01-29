import {
  BannerType, ProductListType, RecommendProductsType,
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
export const getProductList = async () => {
  const response = await getRequest<ProductListType>('/products?sortType=viewcnt_order');

  return response;
};
