/* eslint-disable import/no-extraneous-dependencies */
import { PropsWithChildren, ReactElement } from 'react';

import { render } from '@testing-library/react';

import { ModalContextProvider } from '@contexts/ModalContext';
import MswProviders from '@providers/MswProvider';
import StoreProvider from '@providers/StoreProvider';
import TanstackQueryProvider from '@providers/TanstackQueryProvider';

function AllProviders({ children }: PropsWithChildren) {
  return (
    <MswProviders>
      <TanstackQueryProvider>
        <StoreProvider>
          <ModalContextProvider>
            {children}
          </ModalContextProvider>
        </StoreProvider>
      </TanstackQueryProvider>
    </MswProviders>
  );
}

// render를 Provider로 wrapping한 customRender를 만든다.
function customRender(ui: ReactElement, options = {}) {
  render(ui, { wrapper: AllProviders, ...options });
}

// eslint-disable-next-line import/export
export * from '@testing-library/react';
// eslint-disable-next-line import/export
export { customRender as render };
export { default as userEvent } from '@testing-library/user-event';
