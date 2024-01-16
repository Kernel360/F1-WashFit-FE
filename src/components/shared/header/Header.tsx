import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import CenterIcon from './headerItems/CenterIcon';
import LeftIcon from './headerItems/LeftIcon';
import RightIcon from './headerItems/RightIcon';
import { HeaderProps } from './types/headerType';

export default function Header({
  displayLogo = false, isTransparent = false, displayRightIcon = true,
}:HeaderProps) {
  const cx = classNames.bind(styles);
  return (
    <nav className={cx('nav', { transparent: isTransparent })}>
      <ul className={cx('container')}>
        {!displayLogo && <LeftIcon displayRightIcon={displayRightIcon} className={cx('left')} />}
        {displayLogo && <CenterIcon className={cx('logo')} />}
        <RightIcon
          className={cx('right')}
          displayLogo={displayLogo}
          displayRightIcon={displayRightIcon}
        />
      </ul>
    </nav>
  );
}
