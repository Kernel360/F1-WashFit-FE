import { useCallback } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';

import { SearchFilterType } from '@/constants/searchByMap';
import { getSearchProductByFilter } from '@remote/api/requests/search/search.get.api';

const PAGE_SIZE = 10;

function useSearchProductByFilter(keyword: string = '', sortType: SearchFilterType = 'recent-order') {
  const {
    data: productList, isLoading, fetchNextPage, isFetching, hasNextPage = false,
  } = useInfiniteQuery({
    queryKey: ['productList', sortType, keyword],
    queryFn: ({ pageParam = 0 }) => {
      return getSearchProductByFilter(
        keyword,
        Number(pageParam),
        PAGE_SIZE,
        sortType,
      );
    },
    getNextPageParam: (lastPage) => {
      return (
        lastPage.value.last
          ? undefined
          : lastPage.value.pageable.pageNumber + 1
      );
    },
    suspense: true,
  });

  const loadMore = useCallback(async () => {
    if (hasNextPage === false || isFetching) {
      return;
    }

    await fetchNextPage();
  }, [fetchNextPage, hasNextPage, isFetching]);
  const data = productList?.pages.map((page) => { return page.value.content; }).flat();

  const productCount = productList?.pages[0].value.totalElements;

  return {
    data, isLoading, loadMore, isFetching, hasNextPage, productCount,
  };
}

export default useSearchProductByFilter;
