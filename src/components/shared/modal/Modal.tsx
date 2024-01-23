'use client';

import classNames from 'classnames/bind';

// eslint-disable-next-line import/no-cycle
import useModal from '@contexts/ModalContext';
import useOutsideClick from '@hooks/useOutsideClick';
import Button from '@shared/button/Button';
import Dimmed from '@shared/dimmed/Dimmed';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

import Flex from '../flex/Flex';

import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

interface ModalProps {
  open: boolean
  title: React.ReactNode
  description: React.ReactNode
  leftButtonLabel: React.ReactNode
  rightButtonLabel: React.ReactNode
  onLeftButtonClick: () => void
  onRightButtonClick: () => void
}

function Modal({
  // eslint-disable-next-line max-len
  open, title, description, leftButtonLabel, rightButtonLabel, onLeftButtonClick, onRightButtonClick,
}: ModalProps) {
  const { close } = useModal();
  const modalRef = useOutsideClick(close);

  if (open === false) {
    return null;
  }

  return (
    <Dimmed>
      <div className={cx('container')} ref={modalRef}>
        <Text typography="t4" bold>{title}</Text>
        <Spacing size={8} />
        <Text typography="t6" color="gray200" className={cx('description')}>{description}</Text>
        <Spacing size={32} />
        <Flex justify="space-between" align="center" gap={8} className={cx('buttonContainer')}>
          <Button onClick={onLeftButtonClick} full color="primary" size="large">{leftButtonLabel}</Button>
          {rightButtonLabel && <Button onClick={onRightButtonClick} full size="large" color="gray" weak>{rightButtonLabel}</Button>}
        </Flex>
      </div>
    </Dimmed>
  );
}

export default Modal;
