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
import { ISignUp } from '@remote/api/types/auth';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

function LoginPage() {
  const { register, handleSubmit } = useForm<ISignUp>();

  // eslint-disable-next-line @typescript-eslint/require-await
  const onSubmit = async () => {
    // console.log(data);
  };
  return (
    <main>
      <Header displayLogo={false} />
      <Spacing size={30} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title title="로그인" size={20} />
        <TextField label="아이디" required placeholder="아이디" {...register('id')} />
        <TextField label="비밀번호" required placeholder="비밀번호" {...register('password')} />
        <Spacing size={30} />
        <Button type="submit" size="medium" full>
          로그인
        </Button>
        <Spacing size={20} />
      </form>
      <ul className={cx('linkContainer')}>
        <li>
          <Link href="/">
            <span>회원가입</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>아이디 찾기</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>비밀번호 찾기</span>
          </Link>
        </li>
      </ul>
    </main>
  );
}

export default LoginPage;
