/* eslint-disable @typescript-eslint/no-misused-promises */

'use client';

import { useForm } from 'react-hook-form';

import classNames from 'classnames/bind';

import Button from '@components/shared/button/Button';
import Flex from '@components/shared/flex/Flex';
import Header from '@components/shared/header/Header';
import Radio from '@components/shared/radio/Radio';
import Spacing from '@components/shared/spacing/Spacing';
import Text from '@components/shared/text/Text';
import TextField from '@components/shared/text-field/TextField';
import Title from '@components/shared/title/Title';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

function SignupPage() {
  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line @typescript-eslint/require-await
  const onSubmit = async () => {
    // console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Header displayLogo={false} />
      <Spacing size={20} />
      <Title title="회원가입" />
      <TextField label="아이디" required placeholder="아이디" {...register('id')} />
      <TextField label="비밀번호" required placeholder="비밀번호" {...register('password')} />
      <TextField label="비밀번호 확인" required placeholder="비밀번호 확인" {...register('confirmedPassword')} />
      <TextField label="이메일" required placeholder="이메일" {...register('email')} />
      <Text typography="t6"> 성별</Text>
      <Spacing size={20} />
      <Flex justify="space-between" gap={10}>
        <Radio type="gender" label="남성" value="male" {...register('gender')} />
        <Radio type="gender" label="여성" value="female" {...register('gender')} />
      </Flex>
      <Spacing size={20} />
      <Text typography="t6">연령층</Text>
      <Spacing size={20} />
      <div className={cx('ageGroupContainer')}>
        <Radio type="ageGroup" label="20대 이상" value="20" {...register('age')} />
        <Radio type="ageGroup" label="30대" value="30" {...register('age')} />
        <Radio type="ageGroup" label="40대" value="40" {...register('age')} />
        <Radio type="ageGroup" label="50대" value="50" {...register('age')} />
        <Radio type="ageGroup" label="60대 이상" value="60" {...register('age')} />
      </div>
      <Spacing size={50} />
      <Button size="medium" full>약관 동의하러 가기</Button>
      <Spacing size={20} />
    </form>
  );
}

export default SignupPage;
