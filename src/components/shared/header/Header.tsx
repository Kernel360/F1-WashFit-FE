import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import LeftIcon from './headerItems/LeftIcon';
import RightIcon from './headerItems/RightIcon';
import { HeaderProps } from './types/headerType';

export default function Header({
  isDisplayLogo = true, className,
  children, isTransparent = false, displayRightIconType,
}:HeaderProps) {
  const cx = classNames.bind(styles);

  return (
    <nav className={cx('nav', className, { transparent: isTransparent })}>
      <ul className={cx('container')}>
        <LeftIcon className={cx('left')} isDisplayLogo={isDisplayLogo}>{children}</LeftIcon>
        <RightIcon
          className={cx('right')}
          displayRightIconType={displayRightIconType}
        />
      </ul>
    </nav>
  );
}
