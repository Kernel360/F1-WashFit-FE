'use client';

import classNames from 'classnames/bind';
import Image from 'next/image';

import Button from '@shared/button/Button';
import Flex from '@shared/flex/Flex';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

import styles from './global-error.module.scss';

const cx = classNames.bind(styles);

function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const backToHome = () => {
    window.location.href = '/';
  };

  return (
    <html lang="ko">
      <body>
        <Flex className={cx('container')} direction="column" align="center">
          <Spacing size={155} />
          <Image src="/assets/error.png" alt="에러페이지" width={250} height={180} />
          <Text typography="t4">잠시 후 다시 확인해 주세요.</Text>
          <Text typography="t5" color="gray400">{error.message}</Text>
          <Spacing size={16} />
          <Flex align="center" gap={10}>
            <Button
              color="line"
              size="medium"
              onClick={() => { backToHome(); }}
              css={{
                display: 'block',
                width: '100px',
                height: '40px',
                border: '1px solid var(--primary500)',
              }}
            >
              홈
            </Button>
            <Button
              size="medium"
              onClick={() => { return reset(); }}
              css={{
                display: 'block',
                width: '100px',
                height: '40px',
              }}
            >
              새로고칭
            </Button>
          </Flex>
        </Flex>
      </body>
    </html>
  );
}

export default GlobalError;
