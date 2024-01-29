import { useQuery } from '@tanstack/react-query';

import { getProductList } from '@remote/api/requests/home/home.get.api';

function useProductList() {
  return useQuery({ queryKey: ['productList'], queryFn: getProductList });
}

export default useProductList;
