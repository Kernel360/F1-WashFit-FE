/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-misused-promises */

'use client';

import { useForm } from 'react-hook-form';

import dynamic from 'next/dynamic';

import VALIDATION_MESSAGE_MAP from '@constants/validationMessage';
import { IFindId } from '@remote/api/types/auth';
import useFindId from '@remote/queries/auth/useFindId';
import Header from '@shared/header/Header';
import Spacing from '@shared/spacing/Spacing';
import TextField from '@shared/text-field/TextField';
import Title from '@shared/title/Title';

const FixedBottomButton = dynamic(() => { return import('@shared/fixedBottomButton/FixedBottomButton'); }, {
  ssr: false,
});

function FindIdPage() {
  const { register, handleSubmit, formState: { isValid, errors, isDirty } } = useForm<IFindId>({
    mode: 'onBlur',
  });
  const { mutate } = useFindId();

  const onSubmit = (data: IFindId) => {
    const { email } = data;
    mutate({ email }, {
      onError: (error) => {
        console.error('Error:', error);
        alert('다시 입력해주세요');
        // TODO: 아이디 찾기 실패 시 알림 메세지 바로 출력
      },
      onSuccess: () => {
        alert('회원님의 이메일로 아이디 전송완료');
        // TODO: 아이디 전송완료 페이지 로드하기
      },
    });
  };

  return (
    <>
      <Header isDisplayLogo={false} />
      <Spacing size={16} />
      <main>
        <Title title="아이디 찾기" description="가입할 때 입력한 이메일을 입력해주세요." size={4} descriptionColor="tertiary" />
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
  );
}

export default FindIdPage;
