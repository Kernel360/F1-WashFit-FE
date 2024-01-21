/* eslint-disable @typescript-eslint/no-misused-promises */

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import CarDetails from '@components/additional-info/car-details/CarDetails';
import DetailsLoading from '@components/additional-info/details-loading/DetailsLoading';
import useCarWashCost from '@remote/queries/additional-info/car-wash-details/useCarWashCost';
import useCarWashFrequency from '@remote/queries/additional-info/car-wash-details/useCarWashFrequency';
import Header from '@shared/header/Header';
import ProgressBar from '@shared/progress-bar/ProgressBar';
import Spacing from '@shared/spacing/Spacing';

function CarDetailsPage() {
  const { data: carWashFrequencyData } = useCarWashFrequency();
  const { data: carWashCostData } = useCarWashCost();

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
  if (carWashFrequencyData == null
    || carWashCostData == null
  ) {
    return <div>로딩중 입니다..</div>;
  }

  return (
    <>
      {step <= 3 && (
        <>
          <Header isDisplayLogo={false} />
          <Spacing size={16} />
          <ProgressBar progressCount={3} currentStep={step} />
          <Spacing size={32} />
        </>
      )}
      {step === 1 && (
        <CarDetails
          onClick={onNext}
          main="세차 빈도는 어떤가요?"
          sub="차량 유형을 선택해주세요."
          options={carWashFrequencyData}
          register={register}
          dirtyFields={dirtyFields}
        />
      )}
      {step === 2 && (
        <CarDetails
          onClick={onNext}
          main="지출하시는 세차 비용을 알려주세요"
          sub="용품 구매비용을 포함한 세차 비용을 선택해주세요."
          options={carWashCostData}
          register={register}
          dirtyFields={dirtyFields}
        />
      )}
      {step === 3 && (
        // <CarDetails
        //   onClick={onSubmit}
        //   main="주요 관심사는 무엇인가요?"
        //   sub="주요 관심사를 선택해주세요."
        //   options={}
        //   register={register}
        //   dirtyFields={dirtyFields}
        // />
        <div>
          <button onClick={onSubmit}>주요관심사 api 추가 예정</button>
        </div>
      )}
      {step === 4 && <DetailsLoading />}
    </>
  );
}

export default CarDetailsPage;
