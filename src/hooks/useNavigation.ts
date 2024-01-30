import { useRouter } from 'next/router';

const useNavigation = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return { goBack };
};

export default useNavigation;
