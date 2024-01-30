import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import LeftIcon from './headerItems/LeftIcon';
import RightIcon from './headerItems/RightIcon';
import { HeaderProps } from './types/headerType';

export default function Header({
  className, type,
  title, isTransparent = false, onFilterClick,
}:HeaderProps) {
  const cx = classNames.bind(styles);

  return (
    <nav className={cx('nav', className, { transparent: isTransparent })}>
      <ul className={cx('container')}>
        <LeftIcon className={cx('left')} type={type} title={title} />
        <RightIcon
          className={cx('right')}
          type={type}
          onFilterClick={onFilterClick}
        />
      </ul>
    </nav>
  );
}
