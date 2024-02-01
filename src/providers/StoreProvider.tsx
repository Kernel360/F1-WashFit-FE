'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { makeStore, AppStore, persistor } from '@stores/store';

function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
  // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default StoreProvider;
