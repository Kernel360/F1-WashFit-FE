'use client';

import { useState } from 'react';

import Link from 'next/link';

import FillHeart from '@components/icons/FilldHeart';
import Heart from '@components/icons/Heart';
import Search from '@components/icons/Search';
import Share from '@components/icons/Share';

import { RightIconProps } from '../types/headerType';

function RightIcon({
  className,
  displayLogo,
  displayRightIcon,
}: RightIconProps) {
  const [isSaved, setIsSaved] = useState(false);

  const handleHeartClick = () => {
    setIsSaved((prev) => { return !prev; });
  };

  if (displayLogo) {
    return (
      <li className={className}>
        <Link href="/search">
          <Search />
        </Link>
      </li>
    );
  }

  if (displayRightIcon) {
    return (
      <ul className={className}>
        <li>
          {isSaved
            ? <FillHeart onClick={handleHeartClick} />
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
