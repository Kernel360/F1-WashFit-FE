import classNames from 'classnames/bind';

import Flex from '@/components/shared/flex/Flex';
import Spacing from '@/components/shared/spacing/Spacing';
import { IMarkers } from '@/remote/api/types/map';
import Text from '@shared/text/Text';

import styles from './CarWashBox.module.scss';

const cx = classNames.bind(styles);

function CarWashBox({ carWash }: { carWash: IMarkers | null }) {
  if (carWash == null) {
    return null;
  }

  return (
    <div className={cx('carWashContainer')}>
      <Text typography="t5" bold display="block">{carWash.name}</Text>
      <Spacing size={4} />
      <Flex direction="column">
        <Text typography="t6" bold>주소</Text>
        <Text typography="t7" display="block">{carWash.address}</Text>
      </Flex>
      <Flex direction="column">
        <Text typography="t6" bold>타입</Text>
        <Text typography="t7" display="block">{carWash.type ?? '실내'}</Text>
      </Flex>
    </div>
  );
}

export default CarWashBox;
