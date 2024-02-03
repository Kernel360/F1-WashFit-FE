import { useQuery } from '@tanstack/react-query';

import { getProductDetails } from '@remote/api/requests/product/product.get.api';
import { ProductDetailsType } from '@remote/api/types/home';

function useProductDetails(productNo: number) {
  return useQuery<ProductDetailsType>({ queryKey: ['productDetails', productNo], queryFn: () => { return getProductDetails(productNo); } });
}

export default useProductDetails;
