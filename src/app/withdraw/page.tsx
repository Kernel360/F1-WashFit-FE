/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import { useState } from 'react';

import classNames from 'classnames/bind';

import Checkbox from '@components/icons/Checkbox';
import Button from '@components/shared/button/Button';
import Header from '@components/shared/header/Header';
import Spacing from '@components/shared/spacing/Spacing';
import Title from '@components/shared/title/Title';
import useModal from '@contexts/ModalContext';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

function WithdrawPage() {
  const [isChecked, setIsChecked] = useState(false);
  const { open } = useModal();

  //   모달에서는 회원탈퇴 로직 처리
  const handleWithdrawal = () => {
    open({
      title: '회원 탈퇴',
      description: '회원을 탈퇴하면 차량용품 추천 서비스를 제공받을 수 없습니다. 정말로 탈퇴하시겠습니까?',
      topButtonLabel: '예',
      bottomButtonLabel: '아니오',
      onTopButtonClick: () => {
        // 회원탈퇴
      },
      onBottomButtonClick: () => {
        // 모달닫기
      },
    });
  };

  return (
    <>
      <Header isDisplayLogo={false} />
      <Spacing size={30} />
      <main className={cx('mainContainer')}>
        <Title title="회원탈퇴" />
        <Spacing size={70} />
        <div className={cx('withdrawalAgreement')}>
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
        </div>
        <input type="checkbox" id="agree" onClick={() => { return setIsChecked((prev) => { return !prev; }); }} />
        <label htmlFor="agree">
          <Checkbox color={isChecked ? 'primary' : 'gray100'} />
          약관을 모두 확인하였으며 이에 동의합니다.
        </label>
        <Spacing size={110} />
        <Button disabled={!isChecked} onClick={handleWithdrawal} full>
          회원 탈퇴하기
        </Button>
      </main>
    </>
  );
}

export default WithdrawPage;
