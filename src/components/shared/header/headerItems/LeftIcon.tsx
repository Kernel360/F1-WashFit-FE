'use client';

import Link from 'next/link';

import BackArrow from '@components/icons/BackArrow';
import Logo from '@components/icons/Logo';
import useNavigation from '@hooks/useNavigation';
import Text from '@shared/text/Text';

import { LeftIconProps } from '../types/headerType';

function LeftIcon({
  className, title, type, stepBack,
}: LeftIconProps) {
  const { goBack } = useNavigation();

  if (type === 'home') {
    return (
      <li className={className}>
        <Link href="/">
          <Logo />
        </Link>
      </li>
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
