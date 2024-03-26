// optimistic UPdate로 즐겨찾기 구현

import { useMutation } from '@tanstack/react-query';

import { delFavoriteList } from '@/remote/api/requests/favorite/favorite.get.api';

function useDeleteFavoriteList() {
  return useMutation({
    mutationFn: delFavoriteList,
    onSuccess: () => {},
    onError: () => {},
  });
}

export default useDeleteFavoriteList;
