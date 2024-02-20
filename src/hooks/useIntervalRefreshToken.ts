import useRefreshToken from '@remote/queries/auth/useRefreshToken';

const JWT_EXPIRY_TIME = 15 * 60 * 1000;

function useIntervalRefreshToken() {
  const { mutate: refresh } = useRefreshToken();
  let refreshTokenInterval: NodeJS.Timeout;

  const startRefreshTokenInterval = () => {
    refreshTokenInterval = setInterval(() => {
      refresh();
    }, JWT_EXPIRY_TIME);
  };

  const refreshTokenClear = () => {
    clearInterval(refreshTokenInterval);
  };

  return { startRefreshTokenInterval, refreshTokenClear };
}

export default useIntervalRefreshToken;
