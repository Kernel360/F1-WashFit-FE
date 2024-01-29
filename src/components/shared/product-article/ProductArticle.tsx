import classNames from 'classnames/bind';
import Image from 'next/image';

import Heart from '@components/icons/Heart';
import { IProductList } from '@remote/api/types/home';
import Text from '@shared/text/Text';

import styles from './ProductArticle.module.scss';

interface ProductArticleProps {
  isRow?: boolean;
  itemData: IProductList
}

const cx = classNames.bind(styles);
const safeIcon = '/assets/icons/safe.png';
const warningIcon = '/assets/icons/warning.png';

function ProductArticle({ isRow = false, itemData }: ProductArticleProps) {
  return (
    <article className={cx('container', { row: isRow })}>
      <div className={cx('imgBox')}>
        <Image
          src={itemData.img}
          alt="제품 이미지"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: '100%', height: 'inherit' }}
        />
        <Image
          className={cx('icon')}
          src={itemData.warningLevel === 'warning' ? warningIcon : safeIcon}
          alt={`${itemData.warningLevel} 아이콘 이미지`}
          width={isRow ? 16 : 18}
          height={isRow ? 16 : 18}
        />
      </div>
      <div className={cx('infoBox')}>
        <Text className={cx('ellipsis')} typography="t8" whiteSpace="nowrap" color="primary">{itemData.brand}</Text>
        <Text className={cx('ellipsis')} typography="t6">{itemData.name}</Text>
        <div>
          <Text typography="t7" color="gray300">{itemData.category}</Text>
          <Heart width={16} height={14} color="gray300" />
        </div>
      </div>
    </article>
  );
}
export default ProductArticle;
