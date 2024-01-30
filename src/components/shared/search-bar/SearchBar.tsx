'use client';

import { useState } from 'react';

import classNames from 'classnames/bind';

import Delete from '@components/icons/Delete';
// import Filter from '@components/icons/Filter';
import Search from '@components/icons/Search';

import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

function SearchBar() {
  const [keyword, setKeyword] = useState<string>('');

  const handleSearch = () => {
    // eslint-disable-next-line no-console
    console.log('검색완료');
  };

  return (
    <form
      className={cx('container')}
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
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
    </form>
  );
}

export default SearchBar;
