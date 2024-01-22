'use client';

import { useForm } from 'react-hook-form';

import classNames from 'classnames/bind';
import dynamic from 'next/dynamic';

import {
  CARTYPE_OPTIONS, DRIVING_OPTIONS, PARKING_OPTIONS, SEGMENT_OPTIONS,
} from '@constants/myPage';
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

function MyCarDetailsPage() {
  // TODO: api or store를 통해 defaultValue 설정하기
  const {
    register, watch, formState: {
      isDirty, isValid,
    }, getValues,
  } = useForm({
    defaultValues: {
      segment: '세단',
      cartype: '중형',
      color: '빨간색',
      driving: '복합적',
      parking: '노상',
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
        <Text color="tertiary" typography="t6" className={cx('title')}>차량 유형</Text>
        <Dropdown
          selectedLabel={watch('segment')}
          type="profile"
          options={SEGMENT_OPTIONS}
          {...register('segment')}
        />
      </Flex>
      <Spacing size={12} />
      <Flex direction="column" gap={4}>
        <Text color="tertiary" typography="t6" className={cx('title')}>차량 크기</Text>
        <Dropdown
          selectedLabel={watch('cartype')}
          type="profile"
          options={CARTYPE_OPTIONS}
          {...register('cartype')}
        />
      </Flex>
      <Spacing size={12} />
      <Flex direction="column" gap={4}>
        <Text color="tertiary" typography="t6" className={cx('title')}>차량 색상</Text>
        <Dropdown
          selectedLabel={watch('color')}
          type="profile"
          options={CARTYPE_OPTIONS}
          {...register('color')}
        />
      </Flex>
      <Spacing size={12} />
      <Flex direction="column" gap={4}>
        <Text color="tertiary" typography="t6" className={cx('title')}>주행 환경</Text>
        <Dropdown
          selectedLabel={watch('driving')}
          type="profile"
          options={DRIVING_OPTIONS}
          {...register('driving')}
        />
      </Flex>
      <Spacing size={12} />
      <Flex direction="column" gap={4}>
        <Text color="tertiary" typography="t6" className={cx('title')}>주차 환경</Text>
        <Dropdown
          selectedLabel={watch('parking')}
          type="profile"
          options={PARKING_OPTIONS}
          {...register('parking')}
        />
      </Flex>
      <FixedBottomButton onClick={onSubmit} type="submit" disabled={!isDirty || !isValid}>변경 사항 저장하기</FixedBottomButton>
    </>
  );
}

export default MyCarDetailsPage;
