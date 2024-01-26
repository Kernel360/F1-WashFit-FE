/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-misused-promises */

'use client';

import { useForm } from 'react-hook-form';

import classNames from 'classnames/bind';
import dynamic from 'next/dynamic';

import VALIDATION_MESSAGE_MAP from '@constants/validationMessage';
import { ChangePassword } from '@remote/api/types/auth';
import useChangePassword from '@remote/queries/auth/useChangePassword';
import Header from '@shared/header/Header';
import Spacing from '@shared/spacing/Spacing';
import TextField from '@shared/text-field/TextField';
import Title from '@shared/title/Title';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

const FixedBottomButton = dynamic(() => { return import('@shared/fixedBottomButton/FixedBottomButton'); }, {
  ssr: false,
});

type ChangePasswordType = {
  confirmPassword: string
} & ChangePassword;

function ChangePasswordPage() {
  const {
    register, handleSubmit, watch,
    formState: { isValid, errors, isDirty },
  } = useForm<ChangePasswordType>({
    mode: 'onBlur',
  });

  const { mutate, isError } = useChangePassword();

  const onSubmit = (data: ChangePasswordType) => {
    const { password } = data;
    mutate({ password }, {
      onSuccess: () => {
        alert('비밀번호 변경 완료');
        // TODO: 비밀번호 변경 페이지 로드하기
      },
    });

    console.log(password);
  };

  return (
    <>
      <Header isDisplayLogo={false} />
      <Spacing size={16} />
      <main className={cx('mainContainer')}>
        <Title title="비밀번호 변경" description="사용하실 새 비밀번호를 입력해주세요." size={4} descriptionColor="tertiary" />
        <Spacing size={40} />
        <TextField
          label="새 비밀번호"
          required
          placeholder="새로운 비밀번호를 입력해주세요."
          isPasswordType
          {...register('password', {
            required: true,
            pattern: VALIDATION_MESSAGE_MAP.password.value,
          })}
          hasError={!!errors.password}
          helpMessage={VALIDATION_MESSAGE_MAP.password.message}
        />
        <TextField
          label="비밀번호 확인"
          required
          placeholder="비밀번호를 확인해주세요."
          isPasswordType
          {...register('confirmPassword', {
            required: true,
            validate: (value) => { return value === watch('password') || false; },
          })}
          hasError={!!errors.confirmPassword || isError}
          helpMessage={
            isError
              ? VALIDATION_MESSAGE_MAP.failedChangePassword.message
              : (errors.confirmPassword
                ? VALIDATION_MESSAGE_MAP.confirmPassword.message
                : undefined)
          }
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

export default ChangePasswordPage;
