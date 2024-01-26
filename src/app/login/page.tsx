/* eslint-disable @typescript-eslint/no-misused-promises */

'use client';

import { useForm } from 'react-hook-form';

import classNames from 'classnames/bind';
import Link from 'next/link';

import Button from '@components/shared/button/Button';
import Header from '@components/shared/header/Header';
import Spacing from '@components/shared/spacing/Spacing';
import TextField from '@components/shared/text-field/TextField';
import Title from '@components/shared/title/Title';
import VALIDATION_MESSAGE_MAP from '@constants/validationMessage';
import { ISignIn } from '@remote/api/types/auth';
import useLogin from '@remote/queries/auth/useLogin';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

function LoginPage() {
  const { register, handleSubmit, formState: { isValid } } = useForm<ISignIn>();
  const { mutate } = useLogin();

  const onSubmit = (data: ISignIn) => {
    const {
      id, password,
    } = data;
    mutate({
      id, password,
    });
  };

  // TODO: api return 값에 따라 error처리
  return (
    <main>
      <Header isDisplayLogo={false} />
      <Spacing size={30} />
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
          {...register('password', { required: true })}
          helpMessage={VALIDATION_MESSAGE_MAP.failedLogin.message}
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
    </main>
  );
}

export default LoginPage;
