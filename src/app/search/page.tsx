'use client';

import { useState, useRef } from 'react';

import classNames from 'classnames/bind';

import ProductArticle from '@/components/shared/product-article/ProductArticle';
import Drawer from '@shared/drawer/Drawer';
import Dropdown from '@shared/dropdown/Dropdown';
import Header from '@shared/header/Header';
import SearchBar from '@shared/search-bar/SearchBar';
import Spacing from '@shared/spacing/Spacing';

import styles from './page.module.scss';

const cx = classNames.bind(styles);
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

const options = [
  { label: '조회순', value: '1' },
  { label: '위반제품순', value: '2' },
  { label: '최신순', value: '3' },
  { label: '추천순', value: '4' },
];

function SearchPage() {
  const dropdownRef = useRef<HTMLInputElement>(null);

  const [selectedLabel, setSelectedLabel] = useState(options[0].label);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const handleFilterClick = () => {
    setIsFilterDrawerOpen((prev) => { return !prev; });
  };

  return (
    <>
      <Header isDisplayLogo={false} displayRightIconType="filter" onFilterClick={handleFilterClick} />
      <Spacing size={8} />
      <main className={cx('mainContainer')}>
        <SearchBar />
        <div className={cx('filterWrapper')}>
          <span>{`총 ${productArticleData.length}개`}</span>
          <Dropdown
            options={options}
            selectedLabel={selectedLabel}
            type="favorite"
            ref={dropdownRef}
            setSelectedLabel={setSelectedLabel}
          />
        </div>
        <div className={cx('productArticleContainer')}>
          {productArticleData.map((item) => {
            return <ProductArticle key={item.id} itemData={item} />;
          })}
        </div>
      </main>
      <Drawer isOpen={isFilterDrawerOpen} onClose={() => { setIsFilterDrawerOpen(false); }}>
        {/* 필터 내용 아코디언 */}
        <p>Filter Content</p>
      </Drawer>
    </>
  );
}
export default SearchPage;
