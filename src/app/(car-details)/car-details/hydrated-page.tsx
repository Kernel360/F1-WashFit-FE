/* eslint-disable @typescript-eslint/no-misused-promises */

'use client';

import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import CarColorPicker from '@components/additional-info/car-details/CarColorPicker';
import CarDetails from '@components/additional-info/car-details/CarDetails';
import DetailsLoading from '@components/additional-info/details-loading/DetailsLoading';
import { ICarDetails } from '@remote/api/types/additional-info';
import useCarColor from '@remote/queries/additional-info/car-details/useCarColor';
import useCarDriving from '@remote/queries/additional-info/car-details/useCarDriving';
import useCarParking from '@remote/queries/additional-info/car-details/useCarParking';
import useCarSegment from '@remote/queries/additional-info/car-details/useCarSegment';
import useCarType from '@remote/queries/additional-info/car-details/useCarType';
import useRegisterCarDetails from '@remote/queries/additional-info/car-details/useRegisterCarDetails';
import Header from '@shared/header/Header';
import Loader from '@shared/loader/Loader';
import ProgressBar from '@shared/progress-bar/ProgressBar';
import Spacing from '@shared/spacing/Spacing';

function CarDetailsPage() {
  const { data: carSegmentData, isLoading: isCarSegmentLoading } = useCarSegment();
  const { data: carTypeData, isLoading: isCarTypeLoading } = useCarType();
  const { data: carColorData, isLoading: isCarColorLoading } = useCarColor();
  const { data: carDrivingData, isLoading: isCarDrivingLoading } = useCarDriving();
  const { data: carParkingData, isLoading: isCarParkingLoading } = useCarParking();
  const { mutate } = useRegisterCarDetails();
  const [step, setStep] = useState(1);
  const router = useRouter();

  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    register, getValues, formState: { dirtyFields },
  } = useForm();

  const onNext = useCallback(() => {
    setStep((currentStep) => { return currentStep + 1; });
  }, []);

  const onBack = useCallback(() => {
    if (step === 1) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.push('/my-page');
    }
    setStep((currentStep) => { return currentStep - 1; });
  }, [router, step]);

  // eslint-disable-next-line @typescript-eslint/require-await
  const onSubmit = async () => {
    mutate({ ...getValues() as ICarDetails });
  };

  // TODO: Loader 컴포넌트 제작
  if (isCarSegmentLoading === true
    || isCarTypeLoading === true
    || isCarColorLoading === true
    || isCarDrivingLoading === true
    || isCarParkingLoading === true) {
    return <Loader />;
  }

  if (carSegmentData == null
    || carTypeData == null
    || carColorData == null
    || carDrivingData == null
    || carParkingData == null) {
    return null;
  }

  return (
    <>
      {step <= 5 && (
        <>
          <Header stepBack={step > 1 ? onBack : undefined} />
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
          main="차량 색상은 무엇인가요?"
          sub="차량 색상을 선택해주세요."
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
