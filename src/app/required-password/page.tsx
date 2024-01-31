/* eslint-disable @typescript-eslint/no-misused-promises */

'use client';

import { FieldValues, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import VALIDATION_MESSAGE_MAP from '@constants/validationMessage';
import Button from '@shared/button/Button';
import Header from '@shared/header/Header';
import Spacing from '@shared/spacing/Spacing';
import TextField from '@shared/text-field/TextField';
import Title from '@shared/title/Title';

function RequiredPasswordPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { dirtyFields } } = useForm();

  const onSubmit = (data: FieldValues) => {
    const { password } = data;
    // eslint-disable-next-line no-console
    console.log(password);

    // API 호출 등의 비동기 작업 수행
    // 성공적인 경우 페이지 이동
    router.push('/withdraw');
  };

  return (
    <>
      <Header />
      <Spacing size={30} />
      <form onSubmit={handleSubmit(onSubmit)} className="mainContainer">
        <Title title="비밀번호 입력" description="탈퇴하시려면 비밀번호를 입력해주세요." size={7} descriptionColor="gray400" />
        <Spacing size={30} />
        <TextField
          label="비밀번호"
          required
          placeholder="비밀번호"
          {...register('password', { required: true })}
          helpMessage={VALIDATION_MESSAGE_MAP.confirmPassword.message}
        />
        <Spacing size={40} />
        <Button type="submit" disabled={!dirtyFields.password} size="medium" full>
          확인
        </Button>
      </form>
    </>
  );
}

export default RequiredPasswordPage;
