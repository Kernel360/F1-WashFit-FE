import React from 'react';
import Lottie from 'react-lottie';

import classNames from 'classnames/bind';

import animationData from '@lottie/loader.json';

import styles from './FullPageLoader.module.scss';

const cx = classNames.bind(styles);

const DEFAULT_OPTIONS = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function FullPageLoader() {
  return (
    <div className={cx('wrapper')}>
      <Lottie
        options={DEFAULT_OPTIONS}
        height={400}
        width={400}
      />
    </div>
  );
}

export default FullPageLoader;
