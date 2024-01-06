'use client';

import {
  ComponentProps, createContext, useCallback, useMemo, useState, useContext,
} from 'react';
import { createPortal } from 'react-dom';

// eslint-disable-next-line import/no-cycle
import Modal from '@shared/Modal/Modal';

type ModalProps = ComponentProps<typeof Modal>;
type ModalOptions = Omit<ModalProps, 'open'>;

interface ModalContextValue {
  open: (options: ModalOptions) => void
  close: () => void
}

const defaultValues: ModalProps = {
  open: false,
  title: null,
  description: null,
  topButtonLabel: null,
  bottomButtonLabel: null,
  onTopButtonClick: () => { },
  onBottomButtonClick: () => { },
};

export const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export function ModalContextProvider({ children }: { children: React.ReactNode }) {
  const [modalState, setModalState] = useState(defaultValues);

  const PORTAL_ROOT = typeof window == null ? null : document.getElementById('portal-root');

  const close = useCallback(() => {
    setModalState(defaultValues);
  }, []);

  // eslint-disable-next-line max-len
  const open = useCallback(({ onTopButtonClick, onBottomButtonClick, ...options }: ModalOptions) => {
    setModalState({
      ...options,
      onTopButtonClick: () => {
        close();
        onTopButtonClick();
      },
      onBottomButtonClick: () => {
        close();
        onBottomButtonClick();
      },
      open: true,
    });
  }, [close]);

  const values = useMemo(() => { return { open, close }; }, [open, close]);

  return (
    <ModalContext.Provider value={values}>
      {children}
      {PORTAL_ROOT != null ? createPortal(<Modal {...modalState} />, PORTAL_ROOT) : null}
    </ModalContext.Provider>
  );
}

function useModal() {
  const values = useContext(ModalContext);

  if (values == null) {
    throw new Error('ModalContext 내부에서 사용해주세요');
  }

  return values;
}

export default useModal;
