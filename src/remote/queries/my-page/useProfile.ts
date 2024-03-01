import { useQuery } from '@tanstack/react-query';

import { getProfile } from '@remote/api/requests/my-page/myPage.get.api';
import { UserInfoType } from '@remote/api/types/auth';

function useProfile() {
  return useQuery<UserInfoType>({ queryKey: ['profile'], queryFn: getProfile });
}

export default useProfile;
