/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@tanstack/react-query';

import {
  SearchWashFilterType,
  SearchFilterType,
} from '@/constants/searchByMap';
import { getProductList } from '@/remote/api/requests/home/home.get.api';

const PAGE_SIZE = 3;

function useHotItemList(sortType: SearchFilterType = 'viewCnt-order') {
  const { data: HotItemList, isLoading } = useQuery({
    queryKey: ['hotItemList'],
    queryFn: ({ pageParam = 0 }) => {
      return getProductList(Number(pageParam), PAGE_SIZE, sortType);
    },
  });

  const data = HotItemList?.value.content;
  return {
    data,
    isLoading,
  };
}

export default useHotItemList;
