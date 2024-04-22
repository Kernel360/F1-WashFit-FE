/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-floating-promises */

'use client';

import { useEffect, useRef, useState } from 'react';

import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';

import { Spinner } from '@/components/additional-info/spinner/Spinner';
import FixProductList from '@/components/home/fix-product-list/FixProductList';
import HotItem from '@/components/home/hotItem/HotItem';
import Caption from '@/components/icons/Caption';
import Flex from '@/components/shared/flex/Flex';
import HomeSearchBar from '@/components/shared/home-search-bar/HomeSearchBar';
import ImgToText from '@/components/shared/ocr/Ocr';
import { getProductDetails } from '@/remote/api/requests/product/product.get.api';
import ProductList from '@components/home/product-list/ProductList';
import { MOCK_BANNER_DATA } from '@mocks/homeHandler/mocks';
import BottomNav from '@shared/bottom-nav/BottomNav';
import Banner from '@shared/carousel/Banner';
import RecommendListContainer from '@shared/carousel/RecommendListContainer';
import Header from '@shared/header/Header';
import ScrollToTop from '@shared/scroll-to-top/ScrollToTop';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

// Mock data

// import { TEST_MOCK_BANNER_DATA } from '@mocks/homeHandler/mocks';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const keywordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleSearch = () => {
    router.push(`/search?keyword=${keywordRef.current?.value}`);
  };

  return (
    <>
      <Header className={cx('home')} type="home" />
      <main className={cx('mainContainer')} style={{ position: 'relative' }}>
        <Banner bannerData={MOCK_BANNER_DATA} />
        <Spacing size={8} />
        <div className={cx('recommendWrapper')}>
          <Flex justify="center">
            <HomeSearchBar
              ref={keywordRef}
              handleSearch={handleSearch}
              setIsLoading={setIsLoading}
            />
          </Flex>
          <Spacing size={52} />
          {isLoading ? <Spinner /> : null}
          <div className={cx('hotItemContainer')}>
            <HotItem />
          </div>
          {/* <Spacing size={10} />
          <Text typography="t4" bold>
            추천 세차용품
          </Text>
          <Spacing size={16} />

          <RecommendListContainer /> */}
        </div>

        {/* <Spacing size={20} /> */}
        <div className={cx('grayBar')} />

        <div className={cx('recommendListContainer')}>
          <Text typography="t4" bold>
            이런 상품은 어때요?
          </Text>
          <FixProductList />
        </div>

        <Spacing size={32} />
        <div className={cx('productListContainer')}>
          <Text typography="t4" bold>
            WashFit 랭킹
          </Text>
          <Spacing size={16} />
          {/* <ProductList /> */}
        </div>
        <ScrollToTop />
      </main>
      <BottomNav />
    </>
  );
}

export default Home;
