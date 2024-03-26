// optimistic UPdate로 즐겨찾기 구현

import { useMutation } from '@tanstack/react-query';

import { postFavoriteList } from '@/remote/api/requests/favorite/favorite.get.api';

function useAddFavoriteList() {
  return useMutation({
    mutationFn: postFavoriteList,
    onSuccess: () => {},
    onError: () => {},
  });
}

export default useAddFavoriteList;
