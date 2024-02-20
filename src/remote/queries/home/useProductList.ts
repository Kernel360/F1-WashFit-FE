import { useCallback } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';

import { HomeSortType } from '@components/home/filer-group/types/filterGroup.type';
import { getProductList } from '@remote/api/requests/home/home.get.api';

function useProductList(sortType: HomeSortType = 'recent-order') {
  const {
    data: productList, isLoading, fetchNextPage, isFetching, hasNextPage = false,
  } = useInfiniteQuery({
    queryKey: ['productList', sortType],
    queryFn: ({ pageParam = 0 }) => { return getProductList(Number(pageParam), 10, sortType); },
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
