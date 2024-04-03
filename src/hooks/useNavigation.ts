import { useRouter } from 'next/navigation';

const useNavigation = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const goHome = () => {
    router.push('/');
  };
  return { goBack, goHome };
};

export default useNavigation;
