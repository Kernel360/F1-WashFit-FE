import classNames from 'classnames/bind';

import CurrentLocation from '@/components/icons/CurrentLocation';

import styles from './CurrentLocationButton.module.scss';

const cx = classNames.bind(styles);

function CurrentLocationButton({ onClick }: { onClick: () => void }) {
  return (
    <button className={cx('button')} onClick={onClick} aria-label="현재 위치 표시">
      <CurrentLocation />
    </button>
  );
}
export default CurrentLocationButton;
