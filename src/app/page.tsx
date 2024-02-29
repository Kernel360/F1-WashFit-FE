/* eslint-disable @typescript-eslint/no-unused-vars */

import classNames from 'classnames/bind';

import FilterGroup from '@components/home/filer-group/FilterGroup';
import ProductList from '@components/home/product-list/ProductList';
import { MOCK_BANNER_DATA, MOCK_RECOMMEND_PRODUCTS } from '@mocks/homeHandler/mocks';
import useBanner from '@remote/queries/home/useBanner';
import useRecommendProducts from '@remote/queries/home/useRecommendProducts';
import BottomNav from '@shared/bottom-nav/BottomNav';
import Banner from '@shared/carousel/Banner';
import RecommendList from '@shared/carousel/RecommendList';
import Header from '@shared/header/Header';
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
  // asd
  // if (bannerLoading || recommendProductsLoading || productListLoading) {
  //   return <Loader />;
  // asd
  // }

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
        <div className={cx('productListContainer')}>
          <Text typography="t4" bold>WashFit 랭킹</Text>
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
