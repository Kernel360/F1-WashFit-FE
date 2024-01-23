'use client';

import { useForm } from 'react-hook-form';

import classNames from 'classnames/bind';

import { SEARCH_FILTER_MAP, SearchFilterType } from '@constants/searchByMap';
import BottomNav from '@shared/bottom-nav/BottomNav';
import Dropdown from '@shared/dropdown/Dropdown';
import Header from '@shared/header/Header';
import ProductArticle from '@shared/product-article/ProductArticle';
import SearchBar from '@shared/search-bar/SearchBar';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

const productArticleData = [
  {
    brand: '카믹스',
    category: '코팅제',
    id: 1,
    img: '/assets/profile.JPG',
    name: '아머올 세차용품 스피드 왁스 스프레이 500ml스피드 왁스 스프레이 500ml',
    warningLevel: 'warning',
  },
  {
    brand: '카믹스',
    category: '코팅제',
    id: 2,
    img: '/assets/profile.JPG',
    name: '아머올 세차용품 스피드 왁스 스프레이 500ml스피드 왁스 스프레이 500ml',
    warningLevel: 'warning',
  },
  {
    brand: '카믹스',
    category: '코팅제',
    id: 3,
    img: '/assets/profile.JPG',
    name: '아머올 세차용품 스피드 왁스 스프레이 500ml스피드 왁스 스프레이 500ml',
    warningLevel: 'warning',
  },
  {
    brand: '카믹스',
    category: '코팅제',
    id: 4,
    img: '/assets/profile.JPG',
    name: '아머올 세차용품 스피드 왁스 스프레이 500ml스피드 왁스 스프레이 500ml',
    warningLevel: 'warning',
  }, {
    brand: '카믹스',
    category: '코팅제',
    id: 5,
    img: '/assets/profile.JPG',
    name: '아머올 세차용품 스피드 왁스 스프레이 500ml스피드 왁스 스프레이 500ml',
    warningLevel: 'warning',
  }, {
    brand: '카믹스',
    category: '코팅제',
    id: 6,
    img: '/assets/profile.JPG',
    name: '아머올 세차용품 스피드 왁스 스프레이 500ml스피드 왁스 스프레이 500ml',
    warningLevel: 'warning',
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

  // 스크롤 시 SearchBar 숨기기

  return (
    <>
      <Header isDisplayLogo={false}>즐겨찾기</Header>
      <Spacing size={8} />
      <main className={cx('mainContainer')}>
        <div className={cx('hideWrapper')}>
          <SearchBar />
          <div className={cx('filterBox')}>
            <Text typography="t6" color="gray300">{`총 ${productArticleData.length}개`}</Text>
            <Dropdown
              options={options}
              selectedLabel={(SEARCH_FILTER_MAP[watch('filter') as SearchFilterType])}
              type="favorite"
              {...register('filter')}
            />
          </div>
        </div>
        <div className={cx('productArticleContainer')}>
          {productArticleData.map((item) => {
            return <ProductArticle key={item.id} itemData={item} />;
          })}
        </div>
      </main>
      <BottomNav />
    </>
  );
}

export default FavoritePage;
