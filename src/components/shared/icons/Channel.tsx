import React from 'react';

function Channel({ size = 24 }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.700195" width={size} height={size} fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_483_5846" transform="scale(0.00195312)" />
        </pattern>
      </defs>
    </svg>
  );
}

export default Channel;
