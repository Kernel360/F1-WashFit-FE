import React from 'react';

import Link from 'next/link';

import Heart from '@/components/icons/Heart';
import Share from '@/components/icons/Share';
import Text from '@shared/text/Text';

interface RightIconProps {
  isLogin?: boolean
  className?: string
  displayRightIcon?:boolean
}

function RightIcon({ className, isLogin, displayRightIcon }:RightIconProps) {
  return (
    displayRightIcon ? (
      <ul className={className}>
        <li>
          <Heart width={20} height={18} />
        </li>
        <li>
          <Share />
        </li>
      </ul>
    ) : (
      <li className={className}>
        <Link href="/login">
          <Text typography="t7" color="gray300">{isLogin ? '로그아웃' : '로그인'}</Text>
        </Link>
      </li>
    )
  );
}
export default RightIcon;
