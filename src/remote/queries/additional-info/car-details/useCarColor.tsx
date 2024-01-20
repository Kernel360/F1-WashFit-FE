import { useQuery } from '@tanstack/react-query';

import { getCarColor } from '@remote/api/requests/additional-info/additional-info.get.api';
import { IAdditionalInfo } from '@remote/api/types/additional-info';

function useCarColor() {
  return useQuery<IAdditionalInfo[]>({ queryKey: ['car-color'], queryFn: getCarColor });
}

export default useCarColor;
