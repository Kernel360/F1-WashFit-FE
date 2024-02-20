/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import InfiniteScroll from 'react-infinite-scroll-component';

import classNames from 'classnames/bind';

import { MOCK_BANNER_DATA, MOCK_RECOMMEND_PRODUCTS } from '@mocks/homeHandler/mocks';
import useBanner from '@remote/queries/home/useBanner';
import useProductList from '@remote/queries/home/useProductList';
import useRecommendProducts from '@remote/queries/home/useRecommendProducts';
import BottomNav from '@shared/bottom-nav/BottomNav';
import Banner from '@shared/carousel/Banner';
import RecommendList from '@shared/carousel/RecommendList';
import Flex from '@shared/flex/Flex';
import Header from '@shared/header/Header';
import Loader from '@shared/loader/Loader';
import ProductArticle from '@shared/product-article/ProductArticle';
import Radio from '@shared/radio/Radio';
import ScrollToTop from '@shared/scroll-to-top/ScrollToTop';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

function Home() {
  // 테스트
  // TODO: 비로그인 회원과 부가정보를 입력하지 않은 회원은 부가정보 입력 배너 보이도록 UI 추가
  // const { data: bannerData, isLoading: bannerLoading } = useBanner();
  // const {
  //   data: recommendProductsData, isLoading:
  //   recommendProductsLoading,
  // } = useRecommendProducts();
  // const { data: productListData, isLoading: productListLoading } = useProductList();

  // if (bannerLoading || recommendProductsLoading || productListLoading) {
  //   return <Loader />;
  // }

  const {
    data: productList, isLoading, hasNextPage, loadMore, isFetching,
  } = useProductList();

  return (
    <>
      <Header className={cx('home')} type="home" />
      <main className={cx('mainContainer')}>
        <Spacing size={8} />
        <Banner bannerData={MOCK_BANNER_DATA} />
        <Spacing size={32} />
        <div className={cx('recommendWrapper')}>
          <Text typography="t4" bold>추천 세차용품</Text>
          <Spacing size={16} />
          <RecommendList recommendProductsData={MOCK_RECOMMEND_PRODUCTS} />
        </div>
        <Spacing size={35} />
        <div className={cx('productListWrapper')}>
          <Text typography="t4" bold>WashFit 랭킹</Text>
          <Spacing size={16} />
          <Flex justify="space-between" align="center" gap={8}>
            <Radio label="조회순" name="filter" type="filter" value="view" defaultChecked />
            <Radio label="위반제품" name="filter" type="filter" value="violatingProduct" />
            <Radio label="추천순" name="filter" type="filter" value="recommend" />
            <Radio label="최신순" name="filter" type="filter" value="latest" />
          </Flex>
          <Spacing size={16} />
          <InfiniteScroll
            dataLength={productList?.length ?? 0}
            next={loadMore}
            hasMore={hasNextPage}
            loader={<div className="loader" key={0}>Loading ...</div>}
            inverse={false}
          >
            <div className={cx('productArticleWrapper')}>
              {productList?.map((item, index) => {
                return <ProductArticle key={index} itemData={item} />;
              })}
            </div>
          </InfiniteScroll>
        </div>
        <ScrollToTop />
      </main>
      <BottomNav />
    </>
  );
}

export default Home;
