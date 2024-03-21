// optimistic UPdate로 즐겨찾기 구현

import { delFavoriteList } from '@/remote/api/requests/favorite/favorite.get.api';
import { useMutation } from '@tanstack/react-query';

function deleteFavoriteList() {
  return useMutation({
    mutationFn: delFavoriteList,
    onSuccess: () => {},
    onError: () => {},
  });
}

export default deleteFavoriteList;
