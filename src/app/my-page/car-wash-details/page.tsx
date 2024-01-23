'use client';

import { useForm } from 'react-hook-form';

import classNames from 'classnames/bind';
import dynamic from 'next/dynamic';

import {
  COST_OPTIONS, FREQUENCY_OPTIONS, INTEREST_OPTIONS,
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

function MyCarWashDetailsPage() {
  // TODO: api or store를 통해 defaultValue 설정하기
  const {
    register, watch, formState: {
      isDirty, isValid,
    }, getValues,
  } = useForm({
    defaultValues: {
      frequency: '월 4회 이상',
      cost: '월 10만원 이상',
      interest: '도장',
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
        <Text color="tertiary" typography="t6" className={cx('title')}>세차 회수</Text>
        <Dropdown
          selectedLabel={watch('frequency')}
          type="profile"
          options={FREQUENCY_OPTIONS}
          {...register('frequency')}
        />
      </Flex>
      <Spacing size={12} />
      <Flex direction="column" gap={4}>
        <Text color="tertiary" typography="t6" className={cx('title')}>지출 비용</Text>
        <Dropdown
          selectedLabel={watch('cost')}
          type="profile"
          options={COST_OPTIONS}
          {...register('cost')}
        />
      </Flex>
      <Spacing size={12} />
      <Flex direction="column" gap={4}>
        <Text color="tertiary" typography="t6" className={cx('title')}>주요 관심사</Text>
        <Dropdown
          selectedLabel={watch('interest')}
          type="profile"
          options={INTEREST_OPTIONS}
          {...register('interest')}
        />
      </Flex>
      <FixedBottomButton onClick={onSubmit} type="submit" disabled={!isDirty || !isValid}>변경 사항 저장하기</FixedBottomButton>
    </>
  );
}

export default MyCarWashDetailsPage;
