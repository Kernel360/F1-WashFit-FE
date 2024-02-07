'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

const FixedBottomButton = dynamic(() => { return import('@shared/fixedBottomButton/FixedBottomButton'); }, {
  ssr: false,
});

function CompleteSignupPage() {
  const router = useRouter();

  return (
    <main className="mainContainer">
      <Spacing size={80} />
      <Text typography="t1" bold display="block" textAlign="start">
        회원가입이
        <br />
        완료되었습니다.
      </Text>
      <Spacing size={8} />
      <Text display="block" typography="t6" color="gray500" textAlign="start">
        부가정보를 입력하시면, 차량별 맞춤
        <br />
        차량용품 추천 서비스를 제공받을 수 있습니다.
      </Text>
      {/* TODO: 부가정보 입력하러 가기 넣을지 논의해보기 */}
      <FixedBottomButton onClick={() => {
        router.push('/login');
      }}
      >
        로그인 하기
      </FixedBottomButton>
    </main>
  );
}
export default CompleteSignupPage;
