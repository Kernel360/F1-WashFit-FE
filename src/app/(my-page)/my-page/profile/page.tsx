'use client';

import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import dynamic from 'next/dynamic';

import {
  AGE_MAP, AgeType, GENDER_MAP, GenderType,
} from '@constants/dropdownMap';
import { AGE_OPTIONS, GENDER_OPTIONS } from '@constants/myPage';
import VALIDATION_MESSAGE_MAP from '@constants/validationMessage';
import useProfile from '@remote/queries/my-page/useProfile';
import useUpdateProfile from '@remote/queries/my-page/useUpdateProfile';
import DropdownField from '@shared/dropdown-field/DropdownField';
import Header from '@shared/header/Header';
import Spacing from '@shared/spacing/Spacing';
import TextField from '@shared/text-field/TextField';

const FixedBottomButton = dynamic(() => { return import('@shared/fixedBottomButton/FixedBottomButton'); }, {
  ssr: false,
});

function ProfilePage() {
  const { data: profile } = useProfile();
  const { mutate } = useUpdateProfile();

  const {
    register, watch, reset, formState: {
      errors, isDirty, isValid,
    }, getValues,
  } = useForm({
    defaultValues: useMemo(() => {
      return {
        id: profile?.value.id,
        email: profile?.value.email,
        gender: profile?.value.gender,
        age: profile?.value.age,
      };
    }, [profile?.value.age, profile?.value.email, profile?.value.gender, profile?.value.id]),
    mode: 'onBlur',
  });

  const onSubmit = () => {
    // eslint-disable-next-line no-console
    const { gender, age } = getValues();
    if (gender != null && age != null) {
      mutate({ gender, age });
    }
  };

  useEffect(() => {
    reset({
      id: profile?.value.id,
      email: profile?.value.email,
      gender: profile?.value.gender,
      age: profile?.value.age,
    });
  }, [profile?.value.age, profile?.value.email, profile?.value.gender, profile?.value.id, reset]);

  return (
    <>
      <Header />
      <Spacing size={24} />
      <main className="mainContainer">
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
          selectedLabel={GENDER_MAP[watch('gender') as GenderType]}
          type="profile"
          options={GENDER_OPTIONS}
          {...register('gender')}
        />
        <Spacing size={12} />
        <DropdownField
          label="연령대"
          selectedLabel={AGE_MAP[watch('age') as AgeType]}
          type="profile"
          options={AGE_OPTIONS}
          {...register('age')}
        />
        <FixedBottomButton onClick={onSubmit} type="submit" disabled={!isDirty || !isValid}>변경 사항 저장하기</FixedBottomButton>
      </main>
    </>
  );
}

export default ProfilePage;
