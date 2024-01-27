import { useMutation } from '@tanstack/react-query';

import { changePassword } from '@remote/api/requests/auth/auth.post.api';

function useChangePassword() {
  return useMutation({ mutationFn: changePassword });
}

export default useChangePassword;
