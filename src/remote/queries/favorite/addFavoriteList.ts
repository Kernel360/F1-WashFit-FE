// optimistic UPdate로 즐겨찾기 구현

import { postFavoriteList } from '@/remote/api/requests/favorite/favorite.get.api';
import { useMutation } from '@tanstack/react-query';

function addFavoriteList() {
  return useMutation({
    mutationFn: postFavoriteList,
    onSuccess: () => {},
    onError: () => {},
  });
}

export default addFavoriteList;
