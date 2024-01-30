// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';

import {
  MOCK_BANNER_DATA, MOCK_PRODUCT_LIST, MOCK_RECOMMEND_PRODUCTS,
} from './mocks';

export const homeHandlers = [
  /* ----- 배너 api ----- */
  http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/banner`, () => {
    return HttpResponse.json(MOCK_BANNER_DATA);
  }),

  /* ----- 추천 제품 정보 api ----- */
  http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/recommend_products`, () => {
    return HttpResponse.json(MOCK_RECOMMEND_PRODUCTS);
  }),

  /* ----- 제품 목록 정보 api ----- */
  http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products?sortType=viewcnt_order`, () => {
    return HttpResponse.json(MOCK_PRODUCT_LIST);
  }),
];
