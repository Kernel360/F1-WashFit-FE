import { useRouter } from 'next/navigation';

const useNavigation = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return { goBack };
};

export default useNavigation;
