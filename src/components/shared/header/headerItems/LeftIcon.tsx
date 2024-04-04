'use client';

import Link from 'next/link';

import Inquire from '@/components/icons/Inquire';
import BackArrow from '@components/icons/BackArrow';
// import Inquire from '@components/icons/Inquire';
import Logo from '@components/icons/Logo';
import useNavigation from '@hooks/useNavigation';
import Flex from '@shared/flex/Flex';
import Text from '@shared/text/Text';

import { LeftIconProps } from '../types/headerType';

function LeftIcon({
  className, title, type, stepBack,
}: LeftIconProps) {
  const { goBack, goHome } = useNavigation();

  if (type === 'home') {
    return (
      <Flex justify="center" align="center">
        <li className={className}>
          <Link href="/">
            <Logo />
          </Link>
        </li>
        <li style={{ marginRight: '5px', position: 'relative' }}>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSd96McWLLj3bR-3OEEIx656x3I_9-u7ifjwViQKlveIRb5QiA/viewform"
            target="_blank"
          >
            <Inquire />
          </Link>
        </li>
      </Flex>
    );
  }
  if (type === 'search') {
    return (
      <ul className={className}>
        <li>
          <BackArrow onClick={stepBack ?? goHome} />
        </li>
        {title && (
          <li>
            <Text>{title}</Text>
          </li>
        )}
      </ul>
    );
  }
  return (
    <ul className={className}>
      <li>
        <BackArrow onClick={stepBack ?? goBack} />
      </li>
      {title && (
        <li>
          <Text>{title}</Text>
        </li>
      )}
    </ul>
  );
}
export default LeftIcon;
