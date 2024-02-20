import { useQuery } from '@tanstack/react-query';

import { getCarDriving } from '@remote/api/requests/additional-info/additional-info.get.api';
import { AdditionalInfoType } from '@remote/api/types/additional-info';

function useCarDriving() {
  return useQuery<AdditionalInfoType>({ queryKey: ['car-driving'], queryFn: getCarDriving });
}

export default useCarDriving;
