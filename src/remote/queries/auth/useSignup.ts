import { useMutation } from '@tanstack/react-query';

import { signup } from '@remote/api/requests/auth/auth.post.api';

function useSignup() {
  return useMutation({ mutationFn: signup });
}

export default useSignup;
