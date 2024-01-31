/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable no-console */

'use client';

import { useForm } from 'react-hook-form';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

import VALIDATION_MESSAGE_MAP from '@constants/validationMessage';
import { FindPassword } from '@remote/api/types/auth';
import useFindPassword from '@remote/queries/auth/useFindPassword';
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

  const router = useRouter();
  const { mutate, isError } = useFindPassword();

  const onSubmit = (data: FindPassword) => {
    const { id } = data;
    mutate({ id }, {
      onSuccess: () => {
        router.push('/change-password');
      },
    });

    console.log(id);
  };

  return (
    <>
      <Header />
      <Spacing size={16} />
      <main className="mainContainer">
        <Title title="비밀번호 찾기" description="비밀번호를 찾으실 아이디를 입력해주세요." size={4} descriptionColor="gray400" />
        <Spacing size={40} />
        <TextField
          label="아이디"
          required
          placeholder="아이디"
          {...register('id', {
            required: true,
            pattern: VALIDATION_MESSAGE_MAP.id.value,
          })}
          hasError={isError}
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
