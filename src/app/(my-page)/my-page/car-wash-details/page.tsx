/* eslint-disable @typescript-eslint/no-misused-promises */

'use client';

import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import dynamic from 'next/dynamic';

import withRegisterCarWashDetails from '@hooks/withRegisterCarWashDetails';
import { ICarWashDetails } from '@remote/api/types/additional-info';
import { CarWashInfoType } from '@remote/api/types/my-page';
import useRegisterCarWashDetails from '@remote/queries/additional-info/car-wash-details/useRegisterCarWashDetails';
import DropdownField from '@shared/dropdown-field/DropdownField';
import Header from '@shared/header/Header';
import Spacing from '@shared/spacing/Spacing';
import mappingCarWashDetails from '@utils/mappingCarWashDetails';

const FixedBottomButton = dynamic(() => { return import('@shared/fixedBottomButton/FixedBottomButton'); }, {
  ssr: false,
});

function MyCarWashDetailsPage({ myCarWashInfo }: { myCarWashInfo: CarWashInfoType }) {
  const { carWashOptions, mappingCarWashOptions } = mappingCarWashDetails(myCarWashInfo);
  const { mutate } = useRegisterCarWashDetails();
  const {
    register, watch, reset, formState: {
      isDirty, isValid,
    }, handleSubmit,
  } = useForm({
    defaultValues: useMemo(() => {
      return {
        frequency: myCarWashInfo.value.wash_info.frequency,
        cost: myCarWashInfo.value.wash_info.cost,
        interest: myCarWashInfo.value.wash_info.interest,
      };
    }, [myCarWashInfo]),
    mode: 'onBlur',
  });

  const onSubmit = (carWashInfo: ICarWashDetails) => {
    mutate(carWashInfo);
  };

  useEffect(() => {
    reset({
      frequency: myCarWashInfo.value.wash_info.frequency,
      cost: myCarWashInfo.value.wash_info.cost,
      interest: myCarWashInfo.value.wash_info.interest,
    });
  }, [myCarWashInfo, reset]);

  return (
    <>
      <Header />
      <Spacing size={24} />
      <main className="mainContainer">
        <DropdownField
          label="세차 횟수"
          selectedLabel={mappingCarWashOptions.frequency_options[watch('frequency')]}
          type="profile"
          options={carWashOptions.frequency_options}
          {...register('frequency')}
        />
        <Spacing size={12} />
        <DropdownField
          label="지출 비용"
          selectedLabel={mappingCarWashOptions.cost_options[watch('cost')]}
          type="profile"
          options={carWashOptions.cost_options}
          {...register('cost')}
        />
        <Spacing size={12} />
        <DropdownField
          label="주요 관심사"
          selectedLabel={mappingCarWashOptions.interest_options[watch('interest')]}
          type="profile"
          options={carWashOptions.interest_options}
          {...register('interest')}
        />
        <FixedBottomButton onClick={handleSubmit(onSubmit)} type="submit" disabled={!isDirty || !isValid}>변경 사항 저장하기</FixedBottomButton>
      </main>
    </>
  );
}

export default withRegisterCarWashDetails(MyCarWashDetailsPage);
