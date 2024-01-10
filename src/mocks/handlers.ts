// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://localhost:3030/test', () => {
    return HttpResponse.json(['사과', '배']);
  }),
];
