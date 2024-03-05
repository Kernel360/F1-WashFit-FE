/* eslint-disable @typescript-eslint/no-misused-promises */

'use client';

import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import dynamic from 'next/dynamic';

import {
  AGE_MAP, AgeType, GENDER_MAP, GenderType,
} from '@constants/dropdownMap';
import { AGE_OPTIONS, GENDER_OPTIONS } from '@constants/myPage';
import { ISignUp } from '@remote/api/types/auth';
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
    register, watch, reset, handleSubmit, formState: {
      isDirty, isValid,
    },
  } = useForm({
    defaultValues: useMemo(() => {
      return {
        id: profile?.value.id,
        email: profile?.value.email,
        gender: profile?.value.gender === 'OTHERS' ? 'MALE' : profile?.value.gender,
        age: profile?.value.age === 'AGE_99' ? 'AGE_20' : profile?.value.age,
      };
    }, [profile]),
    mode: 'onBlur',
  });

  const onSubmit = (profileInfo: Partial<ISignUp>) => {
    const { gender, age } = profileInfo;
    if (gender != null && age != null) {
      mutate({ gender, age });
    }
  };

  useEffect(() => {
    reset({
      id: profile?.value.id,
      email: profile?.value.email,
      gender: profile?.value.gender === 'OTHERS' ? 'MALE' : profile?.value.gender,
      age: profile?.value.age === 'AGE_99' ? 'AGE_20' : profile?.value.age,
    });
  }, [profile, reset]);

  return (
    <>
      <Header />
      <Spacing size={24} />
      <main className="mainContainer">
        <TextField
          label="아이디"
          required
          placeholder="아이디"
          {...register('id')}
          readOnly
        />
        <TextField
          label="이메일"
          required
          placeholder="이메일"
          {...register('email')}
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
        <FixedBottomButton onClick={handleSubmit(onSubmit)} type="submit" disabled={!isDirty || !isValid}>변경 사항 저장하기</FixedBottomButton>
      </main>
    </>
  );
}

export default ProfilePage;
