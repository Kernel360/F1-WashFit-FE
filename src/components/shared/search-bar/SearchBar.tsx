import classNames from 'classnames/bind';

import Delete from '@components/icons/Delete';
import Filter from '@components/icons/Filter';
import Search from '@components/icons/Search';

import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

function SearchBar({ isMainPage = true }: { isMainPage?: boolean }) {
  return (
    <form className={cx('container', { dark: isMainPage })}>
      <Search />
      <input
        type="search"
        name="q"
        placeholder="검색어를 입력하세요."

      />
      <button aria-label="전체 삭제 버튼">
        <Delete />
      </button>
      <button aria-label="필터 버튼">
        <Filter />
      </button>
    </form>
  );
}

export default SearchBar;
