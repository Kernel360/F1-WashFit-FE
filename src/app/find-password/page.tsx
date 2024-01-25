/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable no-console */

'use client';

import { useForm } from 'react-hook-form';

import dynamic from 'next/dynamic';

import VALIDATION_MESSAGE_MAP from '@constants/validationMessage';
import { FindPassword } from '@remote/api/types/auth';
import Header from '@shared/header/Header';
import Spacing from '@shared/spacing/Spacing';
import TextField from '@shared/text-field/TextField';
import Title from '@shared/title/Title';

const FixedBottomButton = dynamic(() => { return import('@shared/fixedBottomButton/FixedBottomButton'); }, {
  ssr: false,
});

function FindPasswordPage() {
  const {
    register, handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<FindPassword>({
    mode: 'onBlur',
  });

  const onSubmit = (data: FindPassword) => {
    const { id } = data;
    // mutate({ id }, {
    //   onError: (error) => {
    //     console.error('Error:', error);
    //     alert('아이디가 존재하지 않습니다.');
    //     // TODO: 실패 시 알림 메세지 바로 출력
    //   },
    //   onSuccess: () => {
    //     alert('사용하실 비밀번호를 입력해주세요.');
    //     // TODO: 비밀번호 변경 페이지 로드하기
    //   },
    // });

    console.log(id);
  };

  return (
    <>
      <Header isDisplayLogo={false} />
      <Spacing size={16} />
      <main>
        <Title title="비밀번호 찾기" description="비밀번호를 찾으실 아이디를 입력해주세요." size={4} descriptionColor="tertiary" />
        <Spacing size={40} />
        <TextField
          label="아이디"
          required
          placeholder="아이디"
          {...register('id', {
            required: true,
            pattern: VALIDATION_MESSAGE_MAP.id.value,
          })}
          helpMessage={VALIDATION_MESSAGE_MAP.failedFindPassword.message}
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
export default FindPasswordPage;
