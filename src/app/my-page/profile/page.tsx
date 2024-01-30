'use client';

import { useForm } from 'react-hook-form';

import dynamic from 'next/dynamic';

import { AGE_OPTIONS, GENDER_OPTIONS } from '@constants/myPage';
import VALIDATION_MESSAGE_MAP from '@constants/validationMessage';
import DropdownField from '@shared/dropdown-field/DropdownField';
import Header from '@shared/header/Header';
import Spacing from '@shared/spacing/Spacing';
import TextField from '@shared/text-field/TextField';

const FixedBottomButton = dynamic(() => { return import('@shared/fixedBottomButton/FixedBottomButton'); }, {
  ssr: false,
});

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
      <Header />
      <Spacing size={24} />
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
        label="이메일"
        required
        placeholder="이메일"
        {...register('email', {
          required: true,
          pattern: VALIDATION_MESSAGE_MAP.email.value,
        })}
        hasError={!!errors.email}
        helpMessage={VALIDATION_MESSAGE_MAP.email.message}
        readOnly
      />
      <Spacing size={12} />
      <DropdownField
        label="성별"
        selectedLabel={watch('gender')}
        type="profile"
        options={GENDER_OPTIONS}
        {...register('gender')}
      />
      <Spacing size={12} />
      <DropdownField
        label="연령대"
        selectedLabel={watch('age')}
        type="profile"
        options={AGE_OPTIONS}
        {...register('age')}
      />
      <FixedBottomButton onClick={onSubmit} type="submit" disabled={!isDirty || !isValid}>변경 사항 저장하기</FixedBottomButton>
    </>
  );
}

export default ProfilePage;
