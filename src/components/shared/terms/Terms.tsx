'use client';

import { useState } from 'react';

import classNames from 'classnames/bind';

import Checkbox from '@components/icons/Checkbox';
import Button from '@shared/button/Button';
import Header from '@shared/header/Header';
import Spacing from '@shared/spacing/Spacing';
import Title from '@shared/title/Title';

import styles from './Terms.module.scss';

const cx = classNames.bind(styles);

interface TermsProps {
  type: string;
  onClick?: () => void;
}

function Terms({ type, onClick } : TermsProps) {
  const termsType: { [key: string]: { title: string; description: string } } = {
    withdraw: { title: '회원탈퇴', description: '회원을 탈퇴하시려면 탈퇴 약관을 동의해 주세요.' },
    signup: { title: '회원가입', description: '회원 가입하시려면 가입 약관을 동의해 주세요.' },
  };

  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <Header />
      <main className={cx('mainContainer', 'main')}>
        <div className={cx('contentsWrapper')}>
          <Spacing size={30} />
          <Title title={termsType[type].title} description={termsType[type].description} descriptionColor="gray500" />
          <Spacing size={61} />
          <p className={cx('subTitle')}>서비스 약관</p>
          <div className={cx('agreementContents')}>
            국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여 국가원로로 구성되는 국가원로자문회의를 둘 수 있다.
            국교는 인정되지 아니하며, 종교와 정치는 분리된다.
            행정권은 대통령을 수반으로 하는 정부에 속한다.
            법률이 정하는 주요방위산업체에 종사하는 근로자의 단체행동권은 법률이 정하는 바에 의하여 이를 제한하거나 인정하지 아니할 수 있다.
            이 헌법공포 당시의 국회의원의 임기는 제1항에 의한 국회의 최초의 집회일 전일까지로 한다.
            누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다.
            헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다.
            모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다.
            타인의 범죄행위로 인하여 생명·신체에 대한 피해를 받은 국민은 법률이 정하는 바에 의하여
            국가로부터 구조를 받을 수 있다. 감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다.
            국회는 국무총리 또는 국무위원의 해임을 대통령에게 건의할 수 있다.
            누구든지 병역의무의 이행으로 인하여 불이익한 처우를 받지 아니한다.
            정기회의 회기는 100일을, 임시회의 회기는 30일을 초과할 수 없다.
            법률이 헌법에 위반되는 여부가 재판의 전제가 된 경우에는 법원은 헌법재판소에 제청하여 그 심판에 의하여 재판한다.
            연소자의 근로는 특별한 보호를 받는다.
            대통령·국무총리·국무위원·행정각부의 장·헌법재판소 재판관·법관·중앙선거관리위원회 위원·감사원장·감사위원
            기타 법률이 정한 공무원이 그 직무집행에 있어서 헌법이나 법률을 위배한 때에는 국회는 탄핵의 소추를 의결할 수 있다.
            정기회의 회기는 100일을, 임시회의 회기는 30일을 초과할 수 없다.
            법률이 헌법에 위반되는 여부가 재판의 전제가 된 경우에는 법원은 헌법재판소에 제청하여 그 심판에 의하여 재판한다.
            연소자의 근로는 특별한 보호를 받는다.
            대통령·국무총리·국무위원·행정각부의 장·헌법재판소 재판관·법관·중앙선거관리위원회 위원·감사원장·감사위원
            기타 법률이 정한 공무원이 그 직무집행에 있어서 헌법이나 법률을 위배한 때에는 국회는 탄핵의 소추를 의결할 수 있다.
            정기회의 회기는 100일을, 임시회의 회기는 30일을 초과할 수 없다.
            법률이 헌법에 위반되는 여부가 재판의 전제가 된 경우에는 법원은 헌법재판소에 제청하여 그 심판에 의하여 재판한다.
            연소자의 근로는 특별한 보호를 받는다.
            대통령·국무총리·국무위원·행정각부의 장·헌법재판소 재판관·법관·중앙선거관리위원회 위원·감사원장·감사위원
            기타 법률이 정한 공무원이 그 직무집행에 있어서 헌법이나 법률을 위배한 때에는 국회는 탄핵의 소추를 의결할 수 있다.
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
