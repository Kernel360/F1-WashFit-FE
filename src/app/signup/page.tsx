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
import VALIDATION_MESSAGE_MAP from '@constants/validationMessage';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

function SignupPage() {
  const {
    register, handleSubmit, formState: { errors }, watch,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = () => {
    // console.log(data);
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)}>
      <Header displayLogo={false} />
      <Spacing size={20} />
      <Title title="회원가입" />
      <TextField
        label="아이디"
        required
        placeholder="아이디"
        {...register('id', {
          required: true,
          pattern: VALIDATION_MESSAGE_MAP.id.value,
        })}
        hasError={!!errors.id}
        helpMessage={VALIDATION_MESSAGE_MAP.id.message}
      />
      <TextField
        label="비밀번호"
        required
        placeholder="비밀번호"
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
        placeholder="비밀번호 확인"
        isPasswordType
        {...register('confirmingPassword', {
          required: true,
          validate: (confirmingPassword: string) => {
            if (watch('password') !== confirmingPassword) {
              return false;
            }
            return true;
          },
        })}
        hasError={!!errors.confirmingPassword}
        helpMessage={VALIDATION_MESSAGE_MAP.confirmingPassword.message}
      />
      <TextField
        label="이메일"
        required
        placeholder="이메일"
        {...register('email', {
          required: true,
          pattern: VALIDATION_MESSAGE_MAP.email.value,
        })}
        hasError={!!errors.email}
        helpMessage={VALIDATION_MESSAGE_MAP.email.message}
      />
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
      <Button type="submit" size="medium" full>약관 동의하러 가기</Button>
      <Spacing size={20} />
    </form>
  );
}

export default SignupPage;
