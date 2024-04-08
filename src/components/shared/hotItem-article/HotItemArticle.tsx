import { useCallback } from 'react';

import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

import { IProduct } from '@/remote/api/types/home';
import Text from '@shared/text/Text';

import styles from './HotItemArticle.module.scss';

interface HotItemArticelProps {
  itemData: Partial<IProduct>;
}

interface Type {
  [key: string]: {
    [key: number]: string;
  };
}

const TYPE: Type = {
  세정제: {
    0: '/assets/세정제(1).webp',
    1: '/assets/세정제(2).webp',
    2: '/assets/세정제(3).webp',
    3: '/assets/세정제(4).webp',
    4: '/assets/세정제(5).webp',
  },
  코팅제: {
    0: '/assets/코팅제(1).webp',
    1: '/assets/코팅제(2).webp',
    2: '/assets/코팅제(3).webp',
    3: '/assets/코팅제(4).webp',
    4: '/assets/코팅제(5).webp',
  },
};

const cx = classNames.bind(styles);
function HotItemArticle({ itemData }: HotItemArticelProps) {
  const getRandomNumber = useCallback(() => {
    return Math.floor(Math.random() * 5);
  }, []);

  return (
    <Link href={`/product/${itemData.productNo}`}>
      <div className={cx('container')}>
        <div className={cx('imgBox')}>
          <Image
            src={TYPE.코팅제[getRandomNumber()]}
            alt="제품 이미지"
            width={0}
            height={0}
            sizes="100%"
            style={{ width: '60px', height: '60px' }}
          />
        </div>
        <div className={cx('infoBox')}>
          <Text typography="t6" color="primary500">
            {itemData.companyName}
          </Text>
          <Text typography="t5" color="gray900">
            {itemData.productName}
          </Text>
        </div>
      </div>
    </Link>
  );
}

export default HotItemArticle;
