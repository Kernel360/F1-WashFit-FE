/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-misused-promises */

'use client';

import { useForm } from 'react-hook-form';

import classNames from 'classnames/bind';
import Link from 'next/link';

import KakaoLoginButton from '@components/home/kakao-login-button/KakaoLoginButton';
import NaverLoginButton from '@components/home/naver-login-button/NaverLoginButton';
import VALIDATION_MESSAGE_MAP from '@constants/validationMessage';
import { ISignIn } from '@remote/api/types/auth';
import useLogin from '@remote/queries/auth/useLogin';
import Button from '@shared/button/Button';
import Flex from '@shared/flex/Flex';
import Header from '@shared/header/Header';
import Spacing from '@shared/spacing/Spacing';
import TextField from '@shared/text-field/TextField';
import Title from '@shared/title/Title';
import { useAppSelector } from '@stores/hooks';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

function LoginPage() {
  const { register, handleSubmit, formState: { isValid } } = useForm<ISignIn>();
  const { mutate, isError } = useLogin();

  const onSubmit = (data: ISignIn) => {
    const {
      id, password,
    } = data;
    mutate({
      id, password,
    });
  };

  return (
    <>
      <Header />
      <Spacing size={30} />
      <main className="mainContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title title="로그인" size={20} />
          <TextField
            label="아이디"
            required
            placeholder="아이디"
            {...register('id', { required: true })}
          />
          <TextField
            label="비밀번호"
            required
            placeholder="비밀번호"
            isPasswordType
            {...register('password', { required: true })}
            helpMessage={VALIDATION_MESSAGE_MAP.failedLogin.message}
            hasError={isError}
          />
          <Spacing size={30} />
          <Button type="submit" disabled={!isValid} size="medium" full>
            로그인
          </Button>
          <Spacing size={20} />
        </form>
        <ul className={cx('linkContainer')}>
          <li>
            <Link href="/signup">회원가입</Link>
          </li>
          <li>
            <Link href="/find-id">아이디 찾기</Link>
          </li>
          <li>
            <Link href="/find-password">비밀번호 찾기</Link>
          </li>
        </ul>
        <Spacing size={24} />
        <Flex gap={12} justify="center" align="center">
          {/* <NaverLoginButton /> */}
          <KakaoLoginButton />
        </Flex>
      </main>
    </>
  );
}

export default LoginPage;
