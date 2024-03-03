/* eslint-disable @typescript-eslint/no-misused-promises */

'use client';

import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import dynamic from 'next/dynamic';

import withRegisterDetails from '@hooks/withRegisterCarDetails';
import { ICarDetails } from '@remote/api/types/additional-info';
import { CarInfoType } from '@remote/api/types/my-page';
import useRegisterCarDetails from '@remote/queries/additional-info/car-details/useRegisterCarDetails';
import DropdownField from '@shared/dropdown-field/DropdownField';
import Header from '@shared/header/Header';
import Spacing from '@shared/spacing/Spacing';
import mappingCarDetails from '@utils/mappingCarDetails';

const FixedBottomButton = dynamic(() => { return import('@shared/fixedBottomButton/FixedBottomButton'); }, {
  ssr: false,
});

function MyCarDetailsPage({ myCarInfo }: { myCarInfo: CarInfoType }) {
  const { carOptions, mappingCarOptions } = mappingCarDetails(myCarInfo);
  const { mutate } = useRegisterCarDetails();
  const {
    register, watch, reset, formState: {
      isDirty, isValid,
    }, handleSubmit,
  } = useForm({
    defaultValues: useMemo(() => {
      return {
        segment: myCarInfo.value.car_info.segment,
        cartype: myCarInfo.value.car_info.cartype,
        color: myCarInfo.value.car_info.color,
        driving: myCarInfo.value.car_info.driving,
        parking: myCarInfo.value.car_info.parking,
      };
    }, [myCarInfo]),
    mode: 'onBlur',
  });

  const onSubmit = (carInfo: ICarDetails) => {
    mutate(carInfo);
  };

  useEffect(() => {
    reset({
      segment: myCarInfo.value.car_info.segment,
      cartype: myCarInfo.value.car_info.cartype,
      color: myCarInfo.value.car_info.color,
      driving: myCarInfo.value.car_info.driving,
      parking: myCarInfo.value.car_info.parking,
    });
  }, [myCarInfo, reset]);

  return (
    <>
      <Header />
      <Spacing size={24} />
      <main className="mainContainer">
        <DropdownField
          label="차량 유형"
          selectedLabel={mappingCarOptions.segment_options[watch('segment')]}
          type="profile"
          options={carOptions.segment_options}
          {...register('segment')}
        />
        <Spacing size={12} />
        <DropdownField
          label="차량 크기"
          selectedLabel={mappingCarOptions.carType_options[watch('cartype')]}
          type="profile"
          options={carOptions.carType_options}
          {...register('cartype')}
        />
        <Spacing size={12} />
        <DropdownField
          label="차량 색상"
          selectedLabel={mappingCarOptions.color_options[watch('color')]}
          type="profile"
          options={carOptions.color_options}
          {...register('color')}
        />
        <Spacing size={12} />
        <DropdownField
          label="주행 환경"
          selectedLabel={mappingCarOptions.driving_options[watch('driving')]}
          type="profile"
          options={carOptions.driving_options}
          {...register('driving')}
        />
        <Spacing size={12} />
        <DropdownField
          label="주차 환경"
          selectedLabel={mappingCarOptions.parking_options[watch('parking')]}
          type="profile"
          options={carOptions.parking_options}
          {...register('parking')}
        />
        <FixedBottomButton onClick={handleSubmit(onSubmit)} type="submit" disabled={!isDirty || !isValid}>변경 사항 저장하기</FixedBottomButton>
      </main>
    </>
  );
}

export default withRegisterDetails(MyCarDetailsPage);
