'use client';

import { useForm } from 'react-hook-form';

import classNames from 'classnames/bind';

import { SEARCH_FILTER_MAP, SearchFilterType } from '@constants/searchByMap';
import BottomNav from '@shared/bottom-nav/BottomNav';
import Dropdown from '@shared/dropdown/Dropdown';
import ProductArticle from '@shared/product-article/ProductArticle';
import SearchBar from '@shared/search-bar/SearchBar';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';
import Title from '@shared/title/Title';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

const productListData = [
  {
    brand: '카믹스',
    category: '코팅제',
    productNo: 1,
    imageSource: '/assets/productList.webp',
    productName: '아머올 세차용품 스피드 왁스 스프레이 500ml스피드 왁스 스프레이 500ml',
    safetyStatus: 'warning',
  },
  {
    brand: '카믹스',
    category: '코팅제',
    productNo: 2,
    imageSource: '/assets/productList.webp',
    productName: '아머올 세차용품 스피드 왁스 스프레이 500ml스피드 왁스 스프레이 500ml',
    safetyStatus: 'warning',
  },
  {
    brand: '카믹스',
    category: '코팅제',
    productNo: 3,
    imageSource: '/assets/productList.webp',
    productName: '아머올 세차용품 스피드 왁스 스프레이 500ml스피드 왁스 스프레이 500ml',
    safetyStatus: 'warning',
  },
  {
    brand: '카믹스',
    category: '코팅제',
    productNo: 4,
    imageSource: '/assets/productList.webp',
    productName: '아머올 세차용품 스피드 왁스 스프레이 500ml스피드 왁스 스프레이 500ml',
    safetyStatus: 'warning',
  }, {
    brand: '카믹스',
    category: '코팅제',
    productNo: 5,
    imageSource: '/assets/productList.webp',
    productName: '아머올 세차용품 스피드 왁스 스프레이 500ml스피드 왁스 스프레이 500ml',
    safetyStatus: 'warning',
  }, {
    brand: '카믹스',
    category: '코팅제',
    productNo: 6,
    imageSource: '/assets/productList.webp',
    productName: '아머올 세차용품 스피드 왁스 스프레이 500ml스피드 왁스 스프레이 500ml',
    safetyStatus: 'warning',
  },
];

const options = [
  { label: '조회순', value: 'view' },
  { label: '위반제품순', value: 'violations' },
  { label: '최신순', value: 'latest' },
  { label: '추천순', value: 'recommended' },
];

function FavoritePage() {
  const { register, watch } = useForm({
    defaultValues: {
      filter: 'view',
    },
  });

  return (
    <>
      <div className={cx('headerTitleContainer')}>
        <Spacing size={12} />
        <Title title="즐겨찾기" titleSize="t3" />
      </div>
      <Spacing size={12} />
      <main className={cx('mainContainer', 'main')}>
        <div>
          <SearchBar />
          <div className={cx('filterBox')}>
            <Text typography="t6" color="gray400">{`총 ${productListData.length}개`}</Text>
            <Dropdown
              options={options}
              selectedLabel={(SEARCH_FILTER_MAP[watch('filter') as SearchFilterType])}
              type="favorite"
              {...register('filter')}
            />
          </div>
        </div>
        <div className={cx('productArticleContainer')}>
          {productListData.map((item) => {
            return <ProductArticle key={item.productNo} itemData={item} />;
          })}
        </div>
      </main>
      <BottomNav />
    </>
  );
}

export default FavoritePage;
