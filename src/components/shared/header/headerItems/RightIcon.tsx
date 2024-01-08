import Link from 'next/link';

import Heart from '@components/icons/Heart';
import Share from '@components/icons/Share';
import Text from '@shared/text/Text';

import { RightIconProps } from '../types/headerType';

function RightIcon({
  className,
  isLogin,
  displayLogo,
  displayRightIcon,
}: RightIconProps) {
  // TODO: 로그아웃
  if (displayLogo) {
    return (
      <li className={className}>
        {isLogin
          ? (<Text typography="t7" color="gray300">로그아웃</Text>)
          : (
            <Link href="/login">
              <Text typography="t7" color="gray300">로그인</Text>
            </Link>
          )}
      </li>
    );
  }

  if (displayRightIcon) {
    return (
      <ul className={className}>
        <li>
          <Heart width={20} height={18} />
        </li>
        <li>
          <Share />
        </li>
      </ul>
    );
  }

  return null;
}
export default RightIcon;
