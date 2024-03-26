import classNames from 'classnames/bind';

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
  return (
    <>
      <Header className={cx('home')} type="home" />
      <main className={cx('mainContainer')} style={{ position: 'relative' }}>
        <Banner bannerData={MOCK_BANNER_DATA} />

        <Spacing size={32} />
        {/* <Spacing size={220} /> */}

        <div className={cx('recommendWrapper')}>
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
