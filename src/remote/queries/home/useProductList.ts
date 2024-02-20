import { useCallback } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';

import { getProductList } from '@remote/api/requests/home/home.get.api';

function useProductList() {
  const {
    data: productList, isLoading, fetchNextPage, isFetching, hasNextPage = false,
  } = useInfiniteQuery({
    queryKey: ['productList'],
    queryFn: ({ pageParam }) => { return getProductList(pageParam as number, 10); },
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
