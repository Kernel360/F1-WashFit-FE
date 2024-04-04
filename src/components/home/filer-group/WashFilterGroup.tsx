import React, { SetStateAction } from 'react';

import { SearchWashFilterType } from '@/constants/searchByMap';
import Flex from '@shared/flex/Flex';
import Radio from '@shared/radio/Radio';

function WashFilterGroup({
  setFilter,
}: {
  setFilter: React.Dispatch<SetStateAction<SearchWashFilterType>>;
}) {
  const handleRadioValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sortType = e.target.value as SearchWashFilterType;
    setFilter(sortType);
  };

  return (
    <Flex justify="space-between" align="center" gap={8}>
      <Radio
        label="세정제"
        name="filter"
        type="filter"
        value="viewCnt-order"
        defaultChecked
        onChange={handleRadioValue}
      />
      <Radio
        label="코팅제"
        name="filter"
        type="filter"
        value="violation-products"
        onChange={handleRadioValue}
      />
    </Flex>
  );
}

export default WashFilterGroup;
