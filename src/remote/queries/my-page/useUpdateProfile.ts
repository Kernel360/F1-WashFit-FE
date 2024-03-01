import { toast } from 'react-toastify';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { updateProfile } from '@/remote/api/requests/my-page/myPage.patch.api';

function useUpdateProfile() {
  const router = useRouter();
  const onSuccess = () => {
    router.push('/');
    toast.success('회원정보가 수정되었습니다.');
  };
  const onError = () => {
    toast.error('유효하지 않은 값입니다.');
  };

  return useMutation({ mutationFn: updateProfile, onSuccess, onError });
}

export default useUpdateProfile;
