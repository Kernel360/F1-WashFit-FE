'use client';

import { useForm } from 'react-hook-form';

import dynamic from 'next/dynamic';

import {
  COST_OPTIONS, FREQUENCY_OPTIONS, INTEREST_OPTIONS,
} from '@constants/myPage';
import DropdownField from '@shared/dropdown-field/DropdownField';
import Header from '@shared/header/Header';
import Spacing from '@shared/spacing/Spacing';

const FixedBottomButton = dynamic(() => { return import('@shared/fixedBottomButton/FixedBottomButton'); }, {
  ssr: false,
});

function MyCarWashDetailsPage() {
  // TODO: api or store를 통해 defaultValue 설정하기
  const {
    register, watch, formState: {
      isDirty, isValid,
    }, getValues,
  } = useForm({
    defaultValues: {
      frequency: '월 4회 이상',
      cost: '월 10만원 이상',
      interest: '도장',
    },
    mode: 'onBlur',
  });

  const onSubmit = () => {
    // eslint-disable-next-line no-console
    console.log(getValues());
  };

  return (
    <>
      <Header isDisplayLogo={false} />
      <Spacing size={24} />
      <DropdownField
        label="세차 횟수"
        selectedLabel={watch('frequency')}
        type="profile"
        options={FREQUENCY_OPTIONS}
        {...register('frequency')}
      />
      <Spacing size={12} />
      <DropdownField
        label="지출 비용"
        selectedLabel={watch('cost')}
        type="profile"
        options={COST_OPTIONS}
        {...register('cost')}
      />
      <Spacing size={12} />
      <DropdownField
        label="주요 관심사"
        selectedLabel={watch('interest')}
        type="profile"
        options={INTEREST_OPTIONS}
        {...register('interest')}
      />
      <FixedBottomButton onClick={onSubmit} type="submit" disabled={!isDirty || !isValid}>변경 사항 저장하기</FixedBottomButton>
    </>
  );
}

export default MyCarWashDetailsPage;
