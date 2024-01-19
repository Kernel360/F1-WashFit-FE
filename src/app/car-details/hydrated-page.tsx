/* eslint-disable @typescript-eslint/no-misused-promises */

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import CarColorPicker from '@details/car-details/CarColorPicker';
import CarDetails from '@details/car-details/CarDetails';
import DetailsLoading from '@details/details-loading/DetailsLoading';
import useCarColor from '@remote/queries/details/useCarColor';
import useCarDriving from '@remote/queries/details/useCarDriving';
import useCarParking from '@remote/queries/details/useCarParking';
import useCarSegment from '@remote/queries/details/useCarSegment';
import useCarType from '@remote/queries/details/useCarType';
import Header from '@shared/header/Header';
import ProgressBar from '@shared/progress-bar/ProgressBar';
import Spacing from '@shared/spacing/Spacing';

function CarDetailsPage() {
  const { data: carSegmentData } = useCarSegment();
  const { data: carTypeData } = useCarType();
  const { data: carColorData } = useCarColor();
  const { data: carDrivingData } = useCarDriving();
  const { data: carParkingData } = useCarParking();

  const [step, setStep] = useState(1);

  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    register, getValues, formState: { dirtyFields },
  } = useForm();

  const onNext = () => {
    setStep((currentStep) => { return currentStep + 1; });
  };

  // eslint-disable-next-line @typescript-eslint/require-await
  const onSubmit = async () => {
    onNext();
    // TODO: 쿼리훅 제작
    // console.log(getValues());
  };

  // TODO: Loader 컴포넌트 제작
  if (carSegmentData == null
    || carTypeData == null
    || carColorData == null
    || carDrivingData == null
    || carParkingData == null) {
    return <div>로딩 중..</div>;
  }
  // TODO: 헤더 아이콘 클릭 시 뒤로가기 기능 추가

  return (
    <>
      {step <= 5 && (
        <>
          <Header isDisplayLogo={false} />
          <Spacing size={16} />
          <ProgressBar progressCount={5} currentStep={step} />
          <Spacing size={32} />
        </>
      )}
      {step === 1 && (
        <CarDetails
          onClick={onNext}
          main="차량 유형이 무엇인가요?"
          sub="차량 유형을 선택해주세요."
          options={carSegmentData}
          register={register}
          dirtyFields={dirtyFields}
        />
      )}
      {step === 2 && (
        <CarDetails
          onClick={onNext}
          main="차량 크기가 무엇인가요?"
          sub="차량 크기를 선택해주세요."
          options={carTypeData}
          register={register}
          dirtyFields={dirtyFields}
        />
      )}
      {step === 3 && (
        <CarColorPicker
          onClick={onNext}
          main="차량 크기가 무엇인가요?"
          sub="차량 크기를 선택해주세요."
          options={carColorData}
          register={register}
          dirtyFields={dirtyFields}
        />
      )}
      {step === 4 && (
        <CarDetails
          onClick={onNext}
          main="주행 환경이 어떤가요?"
          sub="주행 환경을 선택해주세요."
          options={carDrivingData}
          register={register}
          dirtyFields={dirtyFields}
        />
      )}
      {step === 5 && (
        <CarDetails
          onClick={onSubmit}
          main="주차 환경이 어떤가요?"
          sub="주차 환경을 선택해주세요."
          options={carParkingData}
          register={register}
          dirtyFields={dirtyFields}
        />
      )}
      {step === 6 && <DetailsLoading />}
    </>
  );
}

export default CarDetailsPage;
