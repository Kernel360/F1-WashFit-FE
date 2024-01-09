'use client';

import classNames from 'classnames/bind';

import styles from './ProgressBar.module.scss';

const cx = classNames.bind(styles);

interface ProgressBarProps {
  progressCount?:number;
  currentProgress?:number;
}

function ProgressBar({ progressCount = 5, currentProgress = 3 }:ProgressBarProps) {
  const progressCountArr = Array.from({ length: progressCount }, (_, i) => { return i + 1; });

  return (
    <div className={cx('container')}>
      <div className={cx('progress-bar')} />
      <div className={cx('progress')} style={{ width: `${((currentProgress - 1) / (progressCount - 1)) * 100}%` }} />
      {progressCountArr.map((num, idx) => {
        const leftPosition = `${(idx / (progressCount - 1)) * 100}%`;
        return (
          <span
            key={num}
            className={cx('progress-steps', { active: currentProgress >= num })}
            style={{ left: leftPosition }}
          >
            {num}
          </span>
        );
      })}
      <span />
    </div>
  );
}

export default ProgressBar;
