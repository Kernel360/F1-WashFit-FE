import { useQuery } from '@tanstack/react-query';

import { getChannelList } from '@remote/api/requests/channel/channel.get.api';
import { IVideoList } from '@remote/api/types/channel';

function useYoutubeList(channelId: string) {
  return useQuery<IVideoList>({
    queryKey: ['channel', channelId],
    queryFn: () => { return getChannelList(channelId); },
    staleTime: 86400000, // 24시간
    cacheTime: 86400000,
  });
}

export default useYoutubeList;
