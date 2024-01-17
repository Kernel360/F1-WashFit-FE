import Link from 'next/link';

import BackArrow from '@components/icons/BackArrow';
import Logo from '@components/icons/Logo';
import Text from '@components/shared/text/Text';

import { LeftIconProps } from '../types/headerType';

function LeftIcon({ className, children, isDisplayLogo }: LeftIconProps) {
  if (isDisplayLogo) {
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
        <BackArrow />
      </li>
      {children && (
      <li>
        <Text>{children}</Text>
      </li>
      )}
    </ul>
  );
}
export default LeftIcon;
