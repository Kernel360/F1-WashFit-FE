/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import classNames from 'classnames/bind';

import Expand from '@components/icons/Expand';
import useScrollToTop from '@hooks/useScrollToTop';

import styles from './ScrollToTop.module.scss';

const cx = classNames.bind(styles);

function ScrollToTop() {
  const { showButton, scrollToTop } = useScrollToTop();

  return showButton && (
    <div className={cx('wrapper')}>
      <button onClick={scrollToTop} className={cx('scroll')}>
        <Expand width={18} height={10} isRotate color="tertiary" />
      </button>
    </div>
  );
}

export default ScrollToTop;
