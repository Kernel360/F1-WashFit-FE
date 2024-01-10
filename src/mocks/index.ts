const initMocks = async () => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    const { server } = await import('./server');
    server.listen({ onUnhandledRequest: 'bypass' }); // 처리되지 않은 요청이라도 통과시키도록
  } else {
    const { worker } = await import('./browser');
    await worker.start({ onUnhandledRequest: 'bypass' }); // 처리되지 않은 요청이라도 통과시키도록
  }
};
export default initMocks;
