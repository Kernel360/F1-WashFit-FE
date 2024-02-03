// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';

import { MOCK_PRODUCT_DETAILS } from './mocks';

export const productHandlers = [
  /* ----- 제품 상세 api ----- */
  http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/product/*`, () => {
    return HttpResponse.json(MOCK_PRODUCT_DETAILS);
  }),
];
