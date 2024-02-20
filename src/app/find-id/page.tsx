/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-misused-promises */

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import dynamic from 'next/dynamic';

import VALIDATION_MESSAGE_MAP from '@constants/validationMessage';
import { FindId } from '@remote/api/types/auth';
import useFindId from '@remote/queries/auth/useFindId';
import Header from '@shared/header/Header';
import Spacing from '@shared/spacing/Spacing';
import TextField from '@shared/text-field/TextField';
import Title from '@shared/title/Title';

import CompleteFindIdPage from './complete/page';

const FixedBottomButton = dynamic(() => { return import('@shared/fixedBottomButton/FixedBottomButton'); }, {
  ssr: false,
});

function FindIdPage() {
  const { register, handleSubmit, formState: { isValid, errors, isDirty } } = useForm<FindId>({
    mode: 'onBlur',
  });
  const { mutate } = useFindId();
  const [step, setStep] = useState(1);

  const onSubmit = (data: FindId) => {
    const { email } = data;
    mutate({ email }, {
      onSuccess: () => {
        setStep((currentStep) => { return currentStep + 1; });
      },
    });
  };

  return (
    <>
      {step === 1 && (
        <>
          <Header />
          <Spacing size={16} />
          <main className="mainContainer">
            <Title title="아이디 찾기" description="가입할 때 입력한 이메일을 입력해주세요." size={4} descriptionColor="gray400" />
            <Spacing size={40} />
            <TextField
              label="이메일"
              required
              placeholder="이메일"
              {...register('email', {
                required: true,
                pattern: VALIDATION_MESSAGE_MAP.email.value,
              })}
              hasError={!!errors.email}
              helpMessage={VALIDATION_MESSAGE_MAP.failedFindId.message}
            />
            <div>
              <FixedBottomButton
                disabled={!isValid || !isDirty}
                onClick={handleSubmit(onSubmit)}
                size="medium"
              >
                다음
              </FixedBottomButton>
            </div>
          </main>
        </>
      )}
      {step === 2 && <CompleteFindIdPage />}
    </>
  );
}

export default FindIdPage;
