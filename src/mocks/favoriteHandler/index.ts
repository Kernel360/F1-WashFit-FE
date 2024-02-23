// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';

import { MOCK_FAVORITE_DATA } from './mock';

export const favoriteHandlers = [
  /* ----- like 제품 목록 정보 api ----- */
  http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/likes?*`, () => {
    return HttpResponse.json(MOCK_FAVORITE_DATA);
  }),
];
