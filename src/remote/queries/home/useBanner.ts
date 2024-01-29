import { useQuery } from '@tanstack/react-query';

import { getBanner } from '@remote/api/requests/home/home.get.api';
import { BannerType } from '@remote/api/types/home';

function useBanner() {
  return useQuery<BannerType>({ queryKey: ['banner'], queryFn: getBanner });
}

export default useBanner;
