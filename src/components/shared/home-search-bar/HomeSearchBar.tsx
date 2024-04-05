/* eslint-disable no-console */
/* eslint-disable  no-alert */

'use client';

import { forwardRef, useRef } from 'react';

import classNames from 'classnames/bind';

import Camera from '@/components/icons/Camera';
import HomeSearch from '@/components/icons/HomeSearch';

import ImgToText from '../ocr/Ocr';
import Spacing from '../spacing/Spacing';

import styles from './HomeSearchBar.module.scss';

const cx = classNames.bind(styles);

interface SearchBarProps {
  isShadow?: boolean;
  handleSearch: () => void;
}

const HomeSearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ isShadow = false, handleSearch }, ref) => {
    const FileRef = useRef<HTMLInputElement>(null);
    const fetchData = async () => {
      try {
        const { Img } = await ImgToText();
        const file = FileRef?.current?.files?.[0];
        if (file instanceof File) {
          const text = await Img({ file });
          console.log(text);
        } else {
          console.error('Invalid file');
        }
        // const text = await Img(FileRef?.current?.files?.[0]);
        // console.log(text);
        console.log(typeof FileRef?.current?.files?.[0]);
      } catch (error) {
        console.error(error);
        alert('이미지를 불러오는데 실패했습니다.');
      }
    };

    return (
      <form
        className={cx('container', { shadow: isShadow })}
        onSubmit={(e) => {
          e.preventDefault();
          // handleSearch();
        }}
      >
        <input
          type="search"
          name="q"
          placeholder=" 검색어를 입력하세요"
          onKeyUp={(e) => {
            return e.key === 'Enter' && handleSearch();
          }}
          ref={ref}
        />
        <label htmlFor="audioFile">
          <Camera />

          <input
            type="file"
            id="audioFile"
            aria-label="카메라 버튼"
            ref={FileRef}
            onChange={() => {
              fetchData().catch((error) => {
                return console.error(error);
              });
            }}
            style={{ cursor: 'pointer', display: 'none' }}
          />
        </label>
        <Spacing direction="vertical" size={8} />

        <button
          type="button"
          id="audioFile"
          aria-label="검색 버튼"
          onClick={handleSearch}
          style={{ cursor: 'pointer' }}
        >
          <HomeSearch />
        </button>
      </form>
    );
  },
);

export default HomeSearchBar;
