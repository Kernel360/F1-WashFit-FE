import { useMutation } from '@tanstack/react-query';

import { findPassword } from '@remote/api/requests/auth/auth.post.api';

function useFindPassword() {
  return useMutation({ mutationFn: findPassword });
}

export default useFindPassword;
