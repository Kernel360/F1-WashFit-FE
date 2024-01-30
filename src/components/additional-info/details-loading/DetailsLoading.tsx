import { useEffect } from 'react';

import classNames from 'classnames/bind';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

import styles from './DetailsLoading.module.scss';

const cx = classNames.bind(styles);

function DetailsLoading() {
  const router = useRouter();
  useEffect(() => {
    const id = setTimeout(() => {
      router.push('/');
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, [router]);

  return (
    <div className={cx('loadingContainer')}>
      <Spacing size={243} />
      <Image src="/assets/loading.png" alt="로딩 중.." width={242} height={200} />
      <Spacing size={16} />
      <Text typography="t3" color="primary500" bold>잠시만 기다려 주세요.</Text>
      <Text typography="t6" color="gray500">해당 페이지로 이동 중입니다.</Text>
    </div>
  );
}

export default DetailsLoading;
