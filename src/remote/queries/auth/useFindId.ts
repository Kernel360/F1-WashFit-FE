/* eslint-disable no-console */
import { useMutation } from '@tanstack/react-query';

import { findId } from '@remote/api/requests/auth/auth.post.api';

function useFindId() {
  return useMutation({ mutationFn: findId });
}

export default useFindId;
