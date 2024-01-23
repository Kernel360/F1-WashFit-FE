import classNames from 'classnames/bind';
import Image from 'next/image';

import styles from './Loader.module.scss';

const cx = classNames.bind(styles);

function Loader() {
  return (
    <div className={cx('wrapper')}>
      <Image src="/assets/loader.gif" alt="로더" width={100} height={100} />
    </div>
  );
}

export default Loader;
