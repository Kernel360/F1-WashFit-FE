'use client';

import { useMemo, useState } from 'react';

import classNames from 'classnames/bind';

import Checkbox from '@components/icons/Checkbox';
import { SIGNUP_TERM } from '@constants/terms/signupTerm';
import Button from '@shared/button/Button';
import Header from '@shared/header/Header';
import Spacing from '@shared/spacing/Spacing';
import Title from '@shared/title/Title';

import styles from './Terms.module.scss';

const cx = classNames.bind(styles);

interface TermsProps {
  type: 'withdraw' | 'signup'
  onClick?: () => void
  stepBack?: () => void | undefined
}

interface ITermsType {
  title: string;
  description: string;
  term: React.ReactNode;
}

function Terms({ type, onClick, stepBack } : TermsProps) {
  const termsType: { [key: string]: ITermsType } = useMemo(() => {
    return {
      withdraw: { title: '회원탈퇴 동의', description: '회원을 탈퇴하시려면 탈퇴 약관을 동의해 주세요.', term: '탈퇴약관' },
      signup: { title: '회원가입 동의', description: '회원 가입하시려면 가입 약관을 동의해 주세요.', term: SIGNUP_TERM },
    };
  }, []);

  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <Header stepBack={stepBack} />
      <main className={cx('mainContainer', 'main')}>
        <div className={cx('contentsWrapper')}>
          <Spacing size={16} />
          <Title title={termsType[type].title} description={termsType[type].description} descriptionColor="gray500" />
          <Spacing size={61} />
          <p className={cx('subTitle')}>서비스 약관</p>
          <div className={cx('termContents')}>
            {termsType[type].term}
          </div>
        </div>
        <div className={cx('buttonWrapper')}>
          <input type="checkbox" id="agree" onClick={() => { return setIsChecked((prev) => { return !prev; }); }} />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="agree">
            <Checkbox color={isChecked ? 'primary500' : 'gray100'} />
            약관을 모두 확인하였으며 이에 동의합니다.
          </label>
          <div className={cx('button')}>
            {type === 'signup' && (
            <Button size="large" disabled={!isChecked} type="submit" onClick={onClick} full>
              회원 가입하기
            </Button>
            )}
            {type === 'withdraw' && (
            <Button size="large" disabled={!isChecked} onClick={onClick} full>
              회원 탈퇴하기
            </Button>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Terms;
