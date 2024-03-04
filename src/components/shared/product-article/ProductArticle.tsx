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

function ProductArticle({ isRow = false, itemData }: ProductArticleProps) {
  return (
    <Link href={`/product/${itemData.productNo}`}>
      <article className={cx('container', { row: isRow })}>
        <div className={cx('imgBox')}>
          <Image
            src={itemData.imageSource ?? '/assets/productList.webp'}
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
