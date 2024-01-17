import classNames from 'classnames/bind';
import Image from 'next/image';

import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

import styles from './Loading.module.scss';

const cx = classNames.bind(styles);

function Loading() {
  return (
    <div className={cx('loadingContainer')}>
      <Spacing size={243} />
      <Image src="/assets/loading.png" alt="로딩 중.." width={242} height={200} />
      <Spacing size={16} />
      <Text typography="t3" color="primary" bold>잠시만 기다려 주세요.</Text>
      <Text typography="t6" color="tertiary">해당 페이지로 이동 중입니다.</Text>
    </div>
  );
}

export default Loading;
