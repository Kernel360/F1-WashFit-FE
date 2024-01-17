'use client';

import { useState } from 'react';

import Link from 'next/link';

import FilledHeart from '@components/icons/FilledHeart';
import Heart from '@components/icons/Heart';
import Search from '@components/icons/Search';
import Share from '@components/icons/Share';

import { RightIconProps } from '../types/headerType';

function RightIcon({
  className,
  displayRightIconType,
}: RightIconProps) {
  const [isSaved, setIsSaved] = useState(false);

  const handleHeartClick = () => {
    setIsSaved((prev) => { return !prev; });
  };

  if (displayRightIconType === 'search') {
    return (
      <li className={className}>
        <Link href="/search">
          <Search />
        </Link>
      </li>
    );
  }

  if (displayRightIconType === 'heartShare') {
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
