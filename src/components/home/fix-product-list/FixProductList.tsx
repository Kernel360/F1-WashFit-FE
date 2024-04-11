'use client';

/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import classNames from 'classnames/bind';

import FixProductArticle from '@/components/shared/fix-product-article/FixProductArticle';
// import FilterGroup from '@components/home/filer-group/FilterGroup';
import { SearchFilterType } from '@constants/searchByMap';
import useProductList from '@remote/queries/home/useProductList';
// import ProductArticle from '@shared/product-article/ProductArticle';
import Spacing from '@shared/spacing/Spacing';

import styles from './FixProductList.module.scss';

const cx = classNames.bind(styles);

function FixProductList() {
  const [filter, setFilter] = useState<SearchFilterType>('viewCnt-order');

  const { data: productList, hasNextPage, loadMore } = useProductList(filter);

  return (
    <>
      <Spacing size={16} />
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
          {productList?.map((item, index) => {
            return <FixProductArticle key={index} itemData={item} />;
          })}
        </div>
      </InfiniteScroll>
    </>
  );
}

export default FixProductList;
