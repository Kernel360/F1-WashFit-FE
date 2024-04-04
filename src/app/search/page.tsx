/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import InfiniteScroll from 'react-infinite-scroll-component';

import classNames from 'classnames/bind';
import { useSearchParams, useRouter } from 'next/navigation';

import { SEARCH_FILTER_MAP, SearchFilterType } from '@constants/searchByMap';
import useSearchProductByFilter from '@remote/queries/search/useSearchProductByFilter';
import Drawer from '@shared/drawer/Drawer';
import Dropdown from '@shared/dropdown/Dropdown';
import Header from '@shared/header/Header';
import ProductArticle from '@shared/product-article/ProductArticle';
import SearchBar from '@shared/search-bar/SearchBar';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

const options = [
  { label: '조회순', value: 'viewCnt-order' },
  { label: '특이사항', value: 'violation-products' },
  { label: '최신순', value: 'recent-order' },
  { label: '추천순', value: 'recommend-order' },
];

function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const getItem = searchParams.get('keyword') as string;

  const keywordRef = useRef<HTMLInputElement>(null);
  const [trigger, setTrigger] = useState(false);

  const handleSearch = () => {
    setTrigger((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    if (keywordRef.current) {
      // router.push(`/search?keyword=${keywordRef.current.value}`);
      keywordRef.current.value = getItem;
      handleSearch();
    }
  }, []);

  const { register, watch } = useForm({
    defaultValues: {
      filter: 'viewCnt-order',
    },
  });

  const [isOpenFilterDrawer, setIsOpenFilterDrawer] = useState(false);

  const handleFilterClick = () => {
    setIsOpenFilterDrawer((prev) => {
      return !prev;
    });
  };

  //
  const {
    data: productList,
    hasNextPage,
    loadMore,
    productCount,
  } = useSearchProductByFilter(
    keywordRef.current?.value,
    watch('filter') as SearchFilterType,
  );

  return (
    <>
      <Header type="search" onFilterClick={handleFilterClick} title="검색" />
      <Spacing size={8} />
      <main className={cx('mainContainer', 'main')}>
        <SearchBar ref={keywordRef} handleSearch={handleSearch} />
        <div className={cx('filterWrapper')}>
          <Text typography="t6" color="gray400">{`총 ${productCount}개`}</Text>
          <Dropdown
            options={options}
            selectedLabel={
              SEARCH_FILTER_MAP[watch('filter') as SearchFilterType]
            }
            type="favorite"
            {...register('filter')}
          />
        </div>
        <InfiniteScroll
          dataLength={productList?.length ?? 0}
          next={loadMore}
          hasMore={hasNextPage}
          loader={(
            <div className="loader" key={0}>
              Loading ...
            </div>
          )}
          inverse={false}
          style={{ overflow: 'visible' }}
        >
          <div className={cx('productArticleContainer')}>
            {productList?.map((item) => {
              return <ProductArticle key={item.productNo} itemData={item} />;
            })}
          </div>
        </InfiniteScroll>
      </main>
      <Drawer
        isOpen={isOpenFilterDrawer}
        onClose={() => {
          setIsOpenFilterDrawer(false);
        }}
      >
        {/* 필터 내용 아코디언 */}
        <p>Filter Content</p>
      </Drawer>
    </>
  );
}
export default SearchPage;
