export const SEARCH_FILTER_MAP = {
  view: '조회순',
  violations: '위반제품순',
  latest: '최신순',
  recommended: '추천순',
} as const;

export type SearchFilterType = keyof typeof SEARCH_FILTER_MAP;
