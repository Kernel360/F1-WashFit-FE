import { useQuery } from '@tanstack/react-query';

import { getProductList } from '@remote/api/requests/home/home.get.api';
import { ProductType } from '@remote/api/types/home';

function useProductList() {
  return useQuery<ProductType>({ queryKey: ['productList'], queryFn: getProductList });
}

export default useProductList;
