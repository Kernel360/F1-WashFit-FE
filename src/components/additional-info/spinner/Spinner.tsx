import Image from 'next/image';

import Flex from '@/components/shared/flex/Flex';

export function Spinner() {
  return (
    <Flex direction="column" justify="center" align="center">
      <Image src="/Spinner.gif" alt="로딩" width={100} height={100} />
      <h3>이미지 업로드중.. 잠시 기다려주세요</h3>
    </Flex>
  );
}
