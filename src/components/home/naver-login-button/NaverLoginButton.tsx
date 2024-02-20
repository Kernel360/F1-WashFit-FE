import Image from 'next/image';

function NaverLoginButton() {
  return (
    <button type="button">
      <Image src="/assets/naverLoginButton.png" alt="네이버 로그인" width={40} height={40} />
    </button>
  );
}

export default NaverLoginButton;
