import { toast } from 'react-toastify';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { postCarWashDetails } from '@remote/api/requests/additional-info/additional-info.post.api';

function useRegisterCarWashDetails() {
  const router = useRouter();
  return useMutation({
    mutationFn: postCarWashDetails,
    onSuccess: () => {
      router.push('/');
      toast.success('등록을 완료하였습니다!');
    },
    onError: () => {
      toast.error('다시 입력해주세요');
    },
  });
}

export default useRegisterCarWashDetails;
