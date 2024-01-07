'use client';

import { useState } from 'react';

import More from '@components/icons/More';

export default function ChannelMoreBtn() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => { return !prev; });
  };

  return (
    <div>
      <button aria-label="더보기 버튼" onClick={handleClick}>
        <More />
      </button>

      {isClicked && (
      <div>더보기 클릭</div>
      )}
    </div>
  );
}
