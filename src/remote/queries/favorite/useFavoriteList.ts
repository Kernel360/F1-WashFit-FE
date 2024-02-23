import { useCallback } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';

import { getFavoriteList } from '@remote/api/requests/favorite/favorite.get.api';
import { ProductListInfoType } from '@remote/api/types/home';

const PAGE_SIZE = 10;

function useFavoriteList() {
  const {
    data, isLoading, fetchNextPage, isFetching, hasNextPage = false,
  } = useInfiniteQuery<ProductListInfoType>({
    queryKey: ['FavoriteProductList'],
    queryFn: ({ pageParam = 0 }) => {
      return getFavoriteList(
        Number(pageParam),
        PAGE_SIZE,
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

  const favoriteList = data?.pages.flatMap((page) => { return page.value.content; }) || [];

  const loadMore = useCallback(async () => {
    if (hasNextPage === false || isFetching) {
      return;
    }

    await fetchNextPage();
  }, [fetchNextPage, hasNextPage, isFetching]);

  return {
    favoriteList, isLoading, loadMore, isFetching, hasNextPage,
  };
}

export default useFavoriteList;
