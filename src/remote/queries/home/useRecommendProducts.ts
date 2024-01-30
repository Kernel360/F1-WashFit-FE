import { useQuery } from '@tanstack/react-query';

import { getRecommendProducts } from '@remote/api/requests/home/home.get.api';
import { RecommendProductsType } from '@remote/api/types/home';

function useRecommendProducts() {
  return useQuery<RecommendProductsType>({ queryKey: ['recommendProducts'], queryFn: getRecommendProducts });
}

export default useRecommendProducts;
