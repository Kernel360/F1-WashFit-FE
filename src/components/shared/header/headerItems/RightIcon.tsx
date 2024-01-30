'use client';

import { useState } from 'react';

import Link from 'next/link';

import FilledHeart from '@components/icons/FilledHeart';
import Filter from '@components/icons/Filter';
import Heart from '@components/icons/Heart';
import Search from '@components/icons/Search';
import Share from '@components/icons/Share';

import { RightIconProps } from '../types/headerType';

function RightIcon({
  className,
  type, onFilterClick,
}: RightIconProps) {
  const [isSaved, setIsSaved] = useState(false);

  const handleHeartClick = () => {
    setIsSaved((prev) => { return !prev; });
  };

  if (type === 'search') {
    return (
      <li className={className}>
        {/* 필터가 적용됐을 때만 필터 아이콘이 바뀜 */}
        <Filter onClick={onFilterClick} />
      </li>
    );
  }

  if (type === 'home' || type === 'favorite') {
    return (
      <li className={className}>
        <Link href="/search">
          <Search />
        </Link>
      </li>
    );
  }

  if (type === 'product') {
    return (
      <ul className={className}>
        <li>
          {isSaved
            ? <FilledHeart onClick={handleHeartClick} />
            : <Heart onClick={handleHeartClick} />}
        </li>
        <li>
          <Share />
        </li>
      </ul>
    );
  }

  return null;
}
export default RightIcon;
