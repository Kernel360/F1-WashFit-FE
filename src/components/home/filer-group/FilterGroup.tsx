import React from 'react';

import { useRouter } from 'next/navigation';

import Flex from '@shared/flex/Flex';
import Radio from '@shared/radio/Radio';

function FilterGroup() {
  const router = useRouter();

  const handleRadioValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sortType = e.target.value;
    router.push(`/?filter=${sortType}`, { scroll: false });
  };

  return (
    <Flex justify="space-between" align="center" gap={8}>
      <Radio label="조회순" name="filter" type="filter" value="viewCnt-order" defaultChecked onChange={handleRadioValue} />
      <Radio label="위반제품" name="filter" type="filter" value="violation-products" onChange={handleRadioValue} />
      <Radio label="추천순" name="filter" type="filter" value="recommend-order" onChange={handleRadioValue} />
      <Radio label="최신순" name="filter" type="filter" value="recent-order" onChange={handleRadioValue} />
    </Flex>
  );
}

export default FilterGroup;
