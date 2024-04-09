/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { SetStateAction } from 'react';

import { Cleaning } from '@/components/icons/Cleaning';
import { Coating } from '@/components/icons/Coating';
import {
  SearchFilterType,
  SearchWashFilterType,
} from '@/constants/searchByMap';
import Flex from '@shared/flex/Flex';
import Radio from '@shared/radio/Radio';

function WashFilterGroup({
  setFilter,
}: {
  setFilter: React.Dispatch<SetStateAction<SearchFilterType>>;
}) {
  const handleRadioValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sortType = e.target.value as SearchFilterType;
    setFilter(sortType);
  };

  return (
    <Flex justify="space-between" align="center" gap={8}>
      <Radio
        img={<Cleaning />}
        label="세정제"
        name="washFilter"
        type="washFilter"
        value="cleaning"
        defaultChecked
        onChange={handleRadioValue}
      />
      <Radio
        img={<Coating />}
        label="코팅제"
        name="washFilter"
        type="washFilter"
        value="coating"
        onChange={handleRadioValue}
      />
    </Flex>
  );
}

export default WashFilterGroup;
