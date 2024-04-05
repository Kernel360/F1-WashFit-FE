'use client';

/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import classNames from 'classnames/bind';

import useProductList from '@/remote/queries/home/useProductList';
import WashFilterGroup from '@components/home/filer-group/WashFilterGroup';
import { SearchWashFilterType } from '@constants/searchByMap';
import Spacing from '@shared/spacing/Spacing';

import styles from './ProductList.module.scss';

// const cx = classNames.bind(styles);

function HotItem() {
  // const [filter, setFilter] = useState<SearchWashFilterType>('cleaning');

  // const {
  //   data: productList, hasNextPage, loadMore,
  // } = useProductList(filter);

  return (
    <>
      {/* <WashFilterGroup setFilter={setFilter} /> */}
      <Spacing size={16} />
      {/* <InfiniteScroll
        dataLength={productList?.length ?? 0}
        next={loadMore}
        hasMore={hasNextPage}
        loader={<div className="loader" key={0}>Loading ...</div>}
        inverse={false}
        style={{ overflow: 'visible' }}
      >
        <div className={cx('productArticleContainer')}>
          {productList?.map((item, index) => {
            return <ProductArticle key={index} itemData={item} />;
          })}
        </div>
      </InfiniteScroll> */}
    </>
  );
}

export default HotItem;
