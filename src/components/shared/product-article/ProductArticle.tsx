import classNames from 'classnames/bind';
import Image from 'next/image';

import Heart from '@components/icons/Heart';

import Text from '../text/Text';

import styles from './ProductArticle.module.scss';
import { IItemData } from './types/ProductArticleType';

interface ProductArticleProps {
  isRow?: boolean;
  itemData:IItemData
}

const cx = classNames.bind(styles);
const safeIcon = '/assets/icons/safe.png';
const warningIcon = '/assets/icons/warning.png';

function ProductArticle({ isRow = false, itemData }:ProductArticleProps) {
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
        <Text typography="t8" whiteSpace="nowrap">{itemData.brand}</Text>
        <Text typography="t6">{itemData.name}</Text>
        <div>
          <Text typography="t7" color="gray300">{itemData.category}</Text>
          <Heart width={16} height={14} color="gray300" changeColor="pink" />
        </div>
      </div>
    </article>
  );
}
export default ProductArticle;
