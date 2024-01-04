import React from 'react';

import BackArrow from '@/components/icons/BackArrow';

interface LeftIconProps {
  className: string;
}

function LeftIcon({ className }: LeftIconProps) {
  return (
    <li className={className}>
      <BackArrow />
    </li>
  );
}
export default LeftIcon;
