'use client';

/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import classNames from 'classnames/bind';

import Caption from '@/components/icons/Caption';
import { Refresh } from '@/components/icons/Refresh';
import Flex from '@/components/shared/flex/Flex';
import HotItemArticle from '@/components/shared/hotItem-article/HotItemArticle';
import useHotItemList from '@/remote/queries/home/useHotItemList';
import useProductList from '@/remote/queries/home/useProductList';
import WashFilterGroup from '@components/home/filer-group/WashFilterGroup';
import { SearchWashFilterType, SearchFilterType } from '@constants/searchByMap';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

import styles from './HotItem.module.scss';

const cx = classNames.bind(styles);

function HotItem() {
  // const [filter, setFilter] = useState<SearchWashFilterType>('cleaning');
  const [filter, setFilter] = useState<SearchFilterType>('viewCnt-order');

  // const {
  //   data: productList, hasNextPage, loadMore,
  // } = useProductList(filter);

  const { data: HotItemList, isLoading } = useHotItemList(filter);

  return (
    <>
      <WashFilterGroup setFilter={setFilter} />
      <Spacing size={16} />
      <Flex align="center">
        <Text typography="t4" bold>
          지금 HOT한 제품
        </Text>
        <Caption />
      </Flex>
      <div className={cx('productArticleContainer')}>
        {HotItemList?.map((item, index) => {
          return <HotItemArticle key={index} itemData={item} />;
        })}
      </div>

      <div className={cx('refreshButtonContainer')}>
        <div className={cx('refreshButton')}>
          <Refresh />
          <div className={cx('more')}>더보기</div>
        </div>
      </div>
    </>
  );
}

export default HotItem;
