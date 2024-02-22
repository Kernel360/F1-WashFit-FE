import { useQuery } from '@tanstack/react-query';

import { getFavoriteList } from '@remote/api/requests/favorite/favorite.get.api';
import { ProductListInfoType } from '@remote/api/types/home';

function useFavoriteList() {
  return useQuery<ProductListInfoType>({ queryKey: ['FavoriteProductList'], queryFn: getFavoriteList });
}

export default useFavoriteList;
