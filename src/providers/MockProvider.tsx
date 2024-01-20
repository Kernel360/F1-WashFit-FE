'use client';

import initMocks from '@mocks/index';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enable') {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  initMocks();
}

function MockProvider({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default MockProvider;
