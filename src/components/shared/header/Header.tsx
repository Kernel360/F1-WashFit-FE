import React from 'react';

import styles from './Header.module.scss';
import CenterIcon from './headerItems/CenterIcon';
import LeftIcon from './headerItems/LeftIcon';
import RightIcon from './headerItems/RightIcon';
import { HeaderProps } from './types/headerType';

export default function Header({
  isLogin = false,
  displayLogo = true, isTransparent = false, displayRightIcon = false,
}:HeaderProps) {
  // TODO: login 상태 가져오기
  return (
    <nav className={`${styles.nav} ${isTransparent ? styles.transparent : ''}`}>
      <ul className={styles.container}>
        {!displayLogo && <LeftIcon className={styles.left} />}
        {displayLogo && <CenterIcon className={styles.logo} />}
        <RightIcon
          className={styles.right}
          isLogin={isLogin}
          displayLogo={displayLogo}
          displayRightIcon={displayRightIcon}
        />
      </ul>
    </nav>
  );
}
