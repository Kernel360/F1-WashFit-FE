/* eslint-disable no-param-reassign */

'use client';

import { forwardRef } from 'react';

import classNames from 'classnames/bind';

import Delete from '@components/icons/Delete';
// import Filter from '@components/icons/Filter';
import Search from '@components/icons/Search';

import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

interface SearchBarProps {
  isShadow?: boolean
  handleSearch: () => void
}

// eslint-disable-next-line max-len
const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(({ isShadow = false, handleSearch }, ref) => {
  return (
    <form
      className={cx('container', { shadow: isShadow })}
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
        ref={ref}
      />
      <button
        type="button"
        aria-label="전체 삭제 버튼"
        onClick={() => {
          if (ref != null && typeof ref !== 'function') {
            ref.current!.value = '';
          }
        }}
        style={{ cursor: 'pointer' }}
      >
        <Delete fillColor="gray300" />
      </button>
    </form>
  );
});

export default SearchBar;
