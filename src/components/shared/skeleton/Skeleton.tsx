import classNames from 'classnames/bind';

import styles from './Skeleton.module.scss';

const cx = classNames.bind(styles);

interface SkeletonProps {
  width: number | string
  height: number | string
}

function Skeleton({ width, height }: SkeletonProps) {
  return (
    <div style={{ width, height }} className={cx('container')} />
  );
}

export default Skeleton;
