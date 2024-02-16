import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import LeftIcon from './headerItems/LeftIcon';
import RightIcon from './headerItems/RightIcon';
import { HeaderProps } from './types/headerType';

const cx = classNames.bind(styles);

export default function Header({
  className, type, stepBack,
  title, isTransparent = false, onFilterClick,
}:HeaderProps) {
  return (
    <nav className={cx('nav', className, { transparent: isTransparent })}>
      <ul className={cx('container')}>
        <LeftIcon className={cx('left')} type={type} title={title} stepBack={stepBack} />
        <RightIcon
          className={cx('right')}
          type={type}
          onFilterClick={onFilterClick}
        />
      </ul>
    </nav>
  );
}
