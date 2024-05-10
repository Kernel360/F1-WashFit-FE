/* eslint-disable no-console */
/* eslint-disable  no-alert */

'use client';

import {
  Dispatch, SetStateAction, forwardRef, useRef,
} from 'react';

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
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const HomeSearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ isShadow = false, handleSearch, setIsLoading }, ref) => {
    const FileRef = useRef<HTMLInputElement>(null);

    const fetchData = async () => {
      try {
        setIsLoading(true);
        // const { Img } = await ImgToText();
        const { Img } = await ImgToText();
        const file = FileRef?.current?.files?.[0];
        if (file instanceof File) {
          const text = await Img({ file });
          console.log(text);
          // const regex = /신 고 번호 { 제 ([0-9-]+)/;
          const regex = /[A-Z]{2}\d{2}-\d{2}-\d{4}/;
          const match = regex.exec(text);
          const reportNumber = match ? match[0] : null;
          if (!reportNumber) {
            console.error('Invalid file');
            alert('유효하지 않은 파일입니다.');
          }
          console.log(reportNumber); // "FB21-02-0363" or "EB22-06-0226"
          setIsLoading(false);
        } else {
          console.error('Invalid file');
        }
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
