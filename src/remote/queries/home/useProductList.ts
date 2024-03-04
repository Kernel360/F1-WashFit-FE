import { useCallback } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';

import { SearchFilterType } from '@/constants/searchByMap';
import { getProductList } from '@remote/api/requests/home/home.get.api';

const PAGE_SIZE = 10;

function useProductList(sortType: SearchFilterType = 'recent-order') {
  const {
    data: productList, isLoading, fetchNextPage, isFetching, hasNextPage = false,
  } = useInfiniteQuery({
    queryKey: ['productList', sortType],
    queryFn: ({ pageParam = 0 }) => {
      return getProductList(
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

  return {
    data, isLoading, loadMore, isFetching, hasNextPage,
  };
}

export default useProductList;
