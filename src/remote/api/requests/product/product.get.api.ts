import { ProductDetailsType } from '../../types/home';
import { getRequest } from '../requests.api';

/* ----- 제품 상세 api ----- */
export const getProductDetails = async (productNo: number) => {
  const response = await getRequest<ProductDetailsType>(`/product/${productNo}`);

  return response;
};
