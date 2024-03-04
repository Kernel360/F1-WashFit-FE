export const SEARCH_FILTER_MAP = {
  'viewCnt-order': '조회순',
  'violation-products': '특이사항',
  'recent-order': '최신순',
  'recommend-order': '추천순',
} as const;

export type SearchFilterType = keyof typeof SEARCH_FILTER_MAP;
