import React from 'react';

import styles from './Header.module.scss';
import CenterIcon from './headerItems/CenterIcon';
import LeftIcon from './headerItems/LeftIcon';
import RightIcon from './headerItems/RightIcon';

interface HeaderProps {
  isLogin?: boolean
  displayLogo?: boolean
  isTransparent?: boolean
  displayRightIcon?: boolean
}

export default function Header({
  isLogin = false, displayLogo = true, isTransparent = false, displayRightIcon = false,
}:HeaderProps) {
  return (
    <nav className={`${styles.nav} ${isTransparent ? styles.transparent : ''}`}>
      <ul className={styles.container}>
        <LeftIcon className={styles.left} />
        {displayLogo && <CenterIcon className={styles.logo} />}
        <RightIcon className={styles.right} isLogin={isLogin} displayRightIcon={displayRightIcon} />
      </ul>
    </nav>
  );
}
