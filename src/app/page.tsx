import classNames from 'classnames/bind';
import dynamic from 'next/dynamic';

import BottomNav from '@components/shared/bottom-nav/BottomNav';
import Flex from '@components/shared/flex/Flex';
import Header from '@components/shared/header/Header';
import ProductArticle from '@components/shared/product-article/ProductArticle';
import Radio from '@components/shared/radio/Radio';
import SearchBar from '@components/shared/search-bar/SearchBar';
import Spacing from '@components/shared/spacing/Spacing';
import Text from '@components/shared/text/Text';

import styles from './page.module.scss';

const Banner = dynamic(() => { return import('@components/shared/carousel/Banner'); }, {
  loading: () => { return <h2>안녕핫[ㅔ요</h2>; },
});
const RecommandList = dynamic(() => { return import('@components/shared/carousel/RecommandList'); });

const cx = classNames.bind(styles);

const bannerData = [
  {
    id: 1,
    link: '/',
    src: '/assets/banner.png',
    alt: '그림',
  },
  {
    id: 2,
    link: '/',
    src: '/assets/banner.png',
    alt: '그림',
  },
  {
    id: 3,
    link: '/',
    src: '/assets/banner.png',
    alt: '그림',
  },
  {
    id: 4,
    link: '/',
    src: '/assets/banner.png',
    alt: '그림',
  },
];

const recommandListData = [
  {
    id: 1,
    link: '/',
    src: '/assets/recommandItem1.png',
    alt: '그림',
    productName: '카샴푸',
  },
  {
    id: 2,
    link: '/',
    src: '/assets/recommandItem2.png',
    alt: '그림',
    productName: '휠 클리너',
  },
  {
    id: 3,
    link: '/',
    src: '/assets/recommandItem3.png',
    alt: '그림',
    productName: '타올',

  },
  {
    id: 4,
    link: '/',
    src: '/assets/recommandItem4.png',
    alt: '그림',
    productName: '먼지털이개',

  },
  {
    id: 5,
    link: '/',
    src: '/assets/recommandItem4.png',
    alt: '그림',
    productName: '먼지털이개',

  },
  {
    id: 6,
    link: '/',
    src: '/assets/recommandItem4.png',
    alt: '그림',
    productName: '먼지털이개',

  },
];

const productArticleData = [
  {
    brand: '카믹스',
    category: '코팅제',
    id: 1,
    img: '/assets/profile.JPG',
    name: '아머올 세차용품 스피드 왁스 스프레이 500ml스피드 왁스 스프레이 500ml',
    warningLevel: 'warning',
  },
  {
    brand: '카믹스',
    category: '코팅제',
    id: 2,
    img: '/assets/profile.JPG',
    name: '아머올 세차용품 스피드 왁스 스프레이 500ml스피드 왁스 스프레이 500ml',
    warningLevel: 'warning',
  },
  {
    brand: '카믹스',
    category: '코팅제',
    id: 3,
    img: '/assets/profile.JPG',
    name: '아머올 세차용품 스피드 왁스 스프레이 500ml스피드 왁스 스프레이 500ml',
    warningLevel: 'warning',
  },
  {
    brand: '카믹스',
    category: '코팅제',
    id: 4,
    img: '/assets/profile.JPG',
    name: '아머올 세차용품 스피드 왁스 스프레이 500ml스피드 왁스 스프레이 500ml',
    warningLevel: 'warning',
  },
];

export default function Home() {
  // TODO: 비로그인 회원과 부가정보를 입력하지 않은 회원은 부가정보 입력 배너 보이도록 UI 추가
  return (
    <>
      <Header className={cx('home')} />
      <main className={cx('mainContainer')}>
        <div className={cx('searchBarWrapper')}>
          <Spacing size={16} />
          <SearchBar />
          <Spacing size={24} />
        </div>
        <div className={cx('bannerWrapper')}>
          <Banner bannerData={bannerData} />
        </div>
        <Spacing size={32} />
        <div className={cx('recommandTextWrapper')}>
          <Text bold>추천 세차용품</Text>
        </div>
        <Spacing size={16} />
        <RecommandList recommandListData={recommandListData} />
        <Spacing size={32} />
        <div className={cx('productListContainer')}>
          <Text bold>WashPedia 랭킹</Text>
          <Spacing size={16} />
          <Flex justify="space-between" align="center" gap={8}>
            <Radio label="조회순" name="filter" type="filter" value="view" defaultChecked />
            <Radio label="위반제품" name="filter" type="filter" value="violatingProduct" />
            <Radio label="추천순" name="filter" type="filter" value="recommand" />
            <Radio label="최신제품" name="filter" type="filter" value="latest" />
          </Flex>
          <Spacing size={16} />
          <div className={cx('productArticleContainer')}>
            {productArticleData.map((item) => {
              return <ProductArticle key={item.id} itemData={item} />;
            })}
          </div>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
