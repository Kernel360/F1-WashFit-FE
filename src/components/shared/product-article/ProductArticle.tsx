import { useCallback } from 'react';

import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

import Heart from '@components/icons/Heart';
import { IProduct } from '@remote/api/types/home';
import Text from '@shared/text/Text';

import styles from './ProductArticle.module.scss';

interface ProductArticleProps {
  isRow?: boolean
  itemData: Partial<IProduct>
}

const cx = classNames.bind(styles);
const safeIcon = '/assets/icons/safe.png';
const warningIcon = '/assets/icons/warning.png';

type Type = {
  [key: string]: {
    [key: number]: string
  }
};

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

function ProductArticle({ isRow = false, itemData }: ProductArticleProps) {
  const getRandomNumber = useCallback(() => {
    return Math.floor(Math.random() * 5); // 0 이상 5 미만의 난수를 생성하고 소수점 이하 버림
  }, []);
  return (
    <Link href={`/product/${itemData.productNo}`}>
      <article className={cx('container', { row: isRow })}>
        <div className={cx('imgBox')}>
          <Image
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={itemData.item === '코팅제' ? TYPE.코팅제[getRandomNumber()] : TYPE.세정제[getRandomNumber()]}
            alt="제품 이미지"
            width={0}
            height={0}
            sizes="100%"
            style={{ width: '100%', height: 'inherit' }}
          />
          <Image
            className={cx('icon')}
            src={itemData.safetyStatus === 'warning' ? warningIcon : safeIcon}
            alt={`${itemData.safetyStatus} 아이콘 이미지`}
            width={isRow ? 16 : 18}
            height={isRow ? 16 : 18}
          />
        </div>
        <div className={cx('infoBox')}>
          <Text className={cx('ellipsis')} typography="t8" color="primary500">{itemData.companyName}</Text>
          <Text className={cx('ellipsis')} typography="t6" color="gray900">{itemData.productName}</Text>
          <div>
            <Text typography="t7" color="gray500">{itemData.item}</Text>
            <Heart width={16} height={14} color="gray400" />
          </div>
        </div>
      </article>
    </Link>
  );
}
export default ProductArticle;
