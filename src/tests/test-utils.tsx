import { PropsWithChildren, ReactElement } from 'react';

import { render } from '@testing-library/react';

import { ModalContextProvider } from '@contexts/ModalContext';
import MockProvider from '@providers/MockProvider';
import QueryProvider from '@providers/QueryProvider';
import StoreProvider from '@providers/StoreProvider';

function AllProviders({ children }: PropsWithChildren) {
  return (
    <MockProvider>
      <QueryProvider>
        <StoreProvider>
          <ModalContextProvider>
            {children}
          </ModalContextProvider>
        </StoreProvider>
      </QueryProvider>
    </MockProvider>
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
