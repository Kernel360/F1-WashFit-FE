'use client';

import { useForm } from 'react-hook-form';

import classNames from 'classnames/bind';
import dynamic from 'next/dynamic';

import { AGE_OPTIONS, GENDER_OPTIONS } from '@constants/myPage';
import VALIDATION_MESSAGE_MAP from '@constants/validationMessage';
import Dropdown from '@shared/dropdown/Dropdown';
import Flex from '@shared/flex/Flex';
import Header from '@shared/header/Header';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

import styles from './page.module.scss';

const FixedBottomButton = dynamic(() => { return import('@shared/fixedBottomButton/FixedBottomButton'); }, {
  ssr: false,
});

const cx = classNames.bind(styles);

function ProfilePage() {
  // TODO: api or store를 통해 defaultValue 설정하기
  const {
    register, watch, formState: {
      errors, isDirty, isValid,
    }, getValues,
  } = useForm({
    defaultValues: {
      id: 'washpedia123',
      email: 'washpedia@gmail.com',
      gender: '남성',
      age: '20',
    },
    mode: 'onBlur',
  });

  const onSubmit = () => {
    // eslint-disable-next-line no-console
    console.log(getValues());
  };

  return (
    <>
      <Header isDisplayLogo={false} />
      <Spacing size={24} />
      <Flex direction="column" gap={4}>
        <Text color="tertiary" typography="t6" className={cx('title')}>아이디</Text>
        <input
          className={cx('field')}
          {...register('id', {
            required: true,
            pattern: VALIDATION_MESSAGE_MAP.id.value,
          })}
        />
        {!!errors.id && <Text typography="t6" color="red">{VALIDATION_MESSAGE_MAP.id.message}</Text>}
      </Flex>
      <Spacing size={12} />
      <Flex direction="column" gap={4}>
        <Text color="tertiary" typography="t6" className={cx('title')}>이메일</Text>
        <input
          className={cx('field')}
          readOnly
          {...register('email')}
        />
      </Flex>
      <Spacing size={12} />
      <Flex direction="column" gap={4}>
        <Text color="tertiary" typography="t6" className={cx('title')}>성별</Text>
        <Dropdown
          selectedLabel={watch('gender')}
          type="profile"
          options={GENDER_OPTIONS}
          {...register('gender')}
        />
      </Flex>
      <Spacing size={12} />
      <Flex direction="column" gap={4}>
        <Text color="tertiary" typography="t6" className={cx('title')}>연령대</Text>
        <Dropdown
          selectedLabel={watch('age')}
          type="profile"
          options={AGE_OPTIONS}
          {...register('age')}
        />
      </Flex>
      <FixedBottomButton onClick={onSubmit} type="submit" disabled={!isDirty || !isValid}>변경 사항 저장하기</FixedBottomButton>
    </>
  );
}

export default ProfilePage;
