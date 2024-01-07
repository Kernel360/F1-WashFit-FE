'use client';

import { useState } from 'react';

import classNames from 'classnames/bind';

import Delete from '@components/icons/Delete';
import Filter from '@components/icons/Filter';
import Search from '@components/icons/Search';

import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

function SearchBar({ isMainPage = true }: { isMainPage?: boolean }) {
  const [keyword, setKeyword] = useState<string>('');

  const handleSearch = () => {
    // console.log('검색완료');
  };

  const handleFilterDrawer = () => {
    // console.log('FilterDrawer 열기');
  };

  return (
    <form className={cx('container', { dark: isMainPage })} onSubmit={(e) => { return e.preventDefault(); }}>
      <Search />
      <input
        type="search"
        name="q"
        placeholder="검색어를 입력하세요."
        onKeyUp={(e) => { return e.key === 'Enter' && handleSearch(); }}
        onChange={(e) => { return setKeyword(e.target.value); }}
        value={keyword}
      />
      {keyword.length > 0 && (
      <button aria-label="전체 삭제 버튼" onClick={() => { return setKeyword(''); }}>
        <Delete />
      </button>
      )}
      <button aria-label="필터 버튼" onClick={handleFilterDrawer}>
        <Filter />
      </button>
    </form>
  );
}

export default SearchBar;
