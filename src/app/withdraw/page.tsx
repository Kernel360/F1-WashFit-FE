/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import useModal from '@contexts/ModalContext';
import Terms from '@shared/terms/Terms';

function WithdrawPage() {
  const { open } = useModal();

  //   모달에서는 회원탈퇴 로직 처리
  const handleWithdrawal = () => {
    open({
      title: '회원 탈퇴',
      description: '회원을 탈퇴하면 차량용품 추천 서비스를 제공받을 수 없습니다. 정말로 탈퇴하시겠습니까?',
      leftButtonLabel: '예',
      rightButtonLabel: '아니오',
      onLeftButtonClick: () => {
        // 회원탈퇴
      },
      onRightButtonClick: () => {
        // 모달닫기
      },
    });
  };

  return (
    <Terms type="withdraw" onClick={handleWithdrawal} />
  );
}

export default WithdrawPage;
