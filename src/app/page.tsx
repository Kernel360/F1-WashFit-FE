/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-floating-promises */

'use client';

import { useEffect, useRef, useState } from 'react';

import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';

import Flex from '@/components/shared/flex/Flex';
import HomeSearchBar from '@/components/shared/home-search-bar/HomeSearchBar';
import ImgToText from '@/components/shared/ocr/Ocr';
import ProductList from '@components/home/product-list/ProductList';
import { MOCK_BANNER_DATA } from '@mocks/homeHandler/mocks';
// import { TEST_MOCK_BANNER_DATA } from '@mocks/homeHandler/mocks';
import BottomNav from '@shared/bottom-nav/BottomNav';
import Banner from '@shared/carousel/Banner';
import RecommendListContainer from '@shared/carousel/RecommendListContainer';
import Header from '@shared/header/Header';
import ScrollToTop from '@shared/scroll-to-top/ScrollToTop';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { Img } = await ImgToText();
        const text = await Img();
        console.log(text);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const keywordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  // const [trigger, setTrigger] = useState(false);
  // useEffect(() => {
  //   Img();
  // }, []);
  const handleSearch = () => {
    router.push(`/search?keyword=${keywordRef.current?.value}`);
  };

  return (
    <>
      <Header className={cx('home')} type="home" />
      <main className={cx('mainContainer')} style={{ position: 'relative' }}>
        <Banner bannerData={MOCK_BANNER_DATA} />
        <Spacing size={8} />
        {/* <Spacing size={220} /> */}
        <div className={cx('recommendWrapper')}>
          <Flex justify="center">
            <HomeSearchBar ref={keywordRef} handleSearch={handleSearch} />
          </Flex>
          <Spacing size={80} />

          <Text typography="t4" bold>
            지금 HOT한 제품
          </Text>

          <Text typography="t4" bold>
            추천 세차용품
          </Text>
          <Spacing size={16} />

          <RecommendListContainer />
        </div>
        <Spacing size={32} />
        <div className={cx('productListContainer')}>
          <Text typography="t4" bold>
            WashFit 랭킹
          </Text>
          <Spacing size={16} />
          <ProductList />
        </div>
        <ScrollToTop />
      </main>
      <BottomNav />
    </>
  );
}

export default Home;
