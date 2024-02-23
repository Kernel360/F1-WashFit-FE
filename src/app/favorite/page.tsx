'use client';

import { useForm } from 'react-hook-form';
import InfiniteScroll from 'react-infinite-scroll-component';

import classNames from 'classnames/bind';

import { SEARCH_FILTER_MAP, SearchFilterType } from '@constants/searchByMap';
import useFavoriteList from '@remote/queries/favorite/useFavoriteList';
import BottomNav from '@shared/bottom-nav/BottomNav';
import Dropdown from '@shared/dropdown/Dropdown';
import ProductArticle from '@shared/product-article/ProductArticle';
import SearchBar from '@shared/search-bar/SearchBar';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';
import Title from '@shared/title/Title';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

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

  const { favoriteList, hasNextPage, loadMore } = useFavoriteList();

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
            <Text typography="t6" color="gray400">{`총 ${favoriteList.length}개`}</Text>
            <Dropdown
              options={options}
              selectedLabel={(SEARCH_FILTER_MAP[watch('filter') as SearchFilterType])}
              type="favorite"
              {...register('filter')}
            />
          </div>
        </div>
        <InfiniteScroll
          dataLength={favoriteList?.length ?? 0}
          next={loadMore}
          hasMore={hasNextPage}
          loader={<div className="loader" key={0}>Loading ...</div>}
          inverse={false}
        >
          <div className={cx('productArticleWrapper')}>
            {favoriteList.map((item) => {
              return <ProductArticle key={item.productNo} itemData={item} />;
            })}
          </div>
        </InfiniteScroll>
      </main>
      <BottomNav />
    </>
  );
}

export default FavoritePage;
