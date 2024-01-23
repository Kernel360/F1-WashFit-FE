'use client';

import { useState } from 'react';

import More from '@components/icons/More';

function ChannelMoreBtn() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => { return !prev; });
  };

  return (
    <div>
      <button aria-label="더보기 버튼" onClick={handleClick}>
        <More />
      </button>
      {/* TODO: 더보기 버튼 클릭시 보여질 내용 */}
      {isClicked && (
      <div style={{ fontSize: '10px' }}>더보기 클릭</div>
      )}
    </div>
  );
}

export default ChannelMoreBtn;
