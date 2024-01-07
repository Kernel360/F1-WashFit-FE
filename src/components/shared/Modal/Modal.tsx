'use client';

import classNames from 'classnames/bind';

// eslint-disable-next-line import/no-cycle
import useModal from '@contexts/ModalContext';
import useOutsideClick from '@hooks/useOutsideClick';
import Button from '@shared/button/Button';
import Dimmed from '@shared/dimmed/Dimmed';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

interface ModalProps {
  open: boolean
  title: React.ReactNode
  description: React.ReactNode
  topButtonLabel: React.ReactNode
  bottomButtonLabel: React.ReactNode
  onTopButtonClick: () => void
  onBottomButtonClick: () => void
}

function Modal({
  // eslint-disable-next-line max-len
  open, title, description, topButtonLabel, bottomButtonLabel, onTopButtonClick, onBottomButtonClick,
}: ModalProps) {
  const { close } = useModal();
  const modalRef = useOutsideClick(close);

  if (open === false) {
    return null;
  }

  return (
    <Dimmed>
      <div className={cx('container')} ref={modalRef}>
        <Text bold>{title}</Text>
        <Spacing size={8} />
        <Text typography="t7" color="gray200">{description}</Text>
        <Spacing size={24} />
        <Button onClick={onTopButtonClick} full color="secondary">{topButtonLabel}</Button>
        <Spacing size={12} />
        <Button onClick={onBottomButtonClick} full>{bottomButtonLabel}</Button>
      </div>
    </Dimmed>
  );
}

export default Modal;
