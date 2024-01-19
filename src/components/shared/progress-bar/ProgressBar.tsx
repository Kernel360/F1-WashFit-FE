'use client';

import { useMemo } from 'react';

import classNames from 'classnames/bind';

import styles from './ProgressBar.module.scss';

const cx = classNames.bind(styles);

interface ProgressBarProps {
  progressCount?: number;
  currentStep?: number;
  setCurrentStep?: (num: number) => void;
}

function ProgressBar({ progressCount = 5, currentStep = 1, setCurrentStep }: ProgressBarProps) {
  // progressCountArr는 currentStep가 변경되지 않는 한 재생성 X
  const progressCountArr = useMemo(() => {
    return Array.from({ length: progressCount }, (_, i) => { return i + 1; });
  }, [progressCount]);

  // progressBarWidth는 currentStep가 변경될 때만 재생성
  const progressBarWidth = useMemo(() => { return `${((currentStep - 1) / (progressCount - 1)) * 100}%`; }, [currentStep, progressCount]);

  const handleClick = (num: number) => {
    setCurrentStep?.(num);
  };

  return (
    <div className={cx('container')}>
      <div className={cx('progressBar')} />
      <div className={cx('progress')} style={{ width: progressBarWidth }} />
      <div>
        {progressCountArr.map((num, idx) => {
          const leftPosition = `${(idx / (progressCount - 1)) * 100}%`;
          return (
            <button
              key={num}
              className={cx('progressSteps', { active: currentStep >= num })}
              style={{ left: leftPosition }}
              onClick={() => { return handleClick(num); }}
            >
              {num}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ProgressBar;
