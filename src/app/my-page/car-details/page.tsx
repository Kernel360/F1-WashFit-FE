'use client';

import { useForm } from 'react-hook-form';

import dynamic from 'next/dynamic';

import {
  CARTYPE_OPTIONS, COLOR_OPTIONS, DRIVING_OPTIONS, PARKING_OPTIONS, SEGMENT_OPTIONS,
} from '@constants/myPage';
import DropdownField from '@shared/dropdown-field/DropdownField';
import Header from '@shared/header/Header';
import Spacing from '@shared/spacing/Spacing';

const FixedBottomButton = dynamic(() => { return import('@shared/fixedBottomButton/FixedBottomButton'); }, {
  ssr: false,
});

function MyCarDetailsPage() {
  // TODO: api or store를 통해 defaultValue 설정하기
  const {
    register, watch, formState: {
      isDirty, isValid,
    }, getValues,
  } = useForm({
    defaultValues: {
      segment: '세단',
      cartype: '중형',
      color: '빨간색',
      driving: '복합적',
      parking: '노상',
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
        label="차량 유형"
        selectedLabel={watch('segment')}
        type="profile"
        options={SEGMENT_OPTIONS}
        {...register('segment')}
      />
      <Spacing size={12} />
      <DropdownField
        label="차량 크기"
        selectedLabel={watch('cartype')}
        type="profile"
        options={CARTYPE_OPTIONS}
        {...register('cartype')}
      />
      <Spacing size={12} />
      <DropdownField
        label="차량 색상"
        selectedLabel={watch('color')}
        type="profile"
        options={COLOR_OPTIONS}
        {...register('color')}
      />
      <Spacing size={12} />
      <DropdownField
        label="주행 환경"
        selectedLabel={watch('driving')}
        type="profile"
        options={DRIVING_OPTIONS}
        {...register('driving')}
      />
      <Spacing size={12} />
      <DropdownField
        label="주차 환경"
        selectedLabel={watch('parking')}
        type="profile"
        options={PARKING_OPTIONS}
        {...register('parking')}
      />
      <FixedBottomButton onClick={onSubmit} type="submit" disabled={!isDirty || !isValid}>변경 사항 저장하기</FixedBottomButton>
    </>
  );
}

export default MyCarDetailsPage;
