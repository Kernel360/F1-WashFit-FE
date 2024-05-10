import { useQuery } from '@tanstack/react-query';

import getChannelProfile from '@/remote/api/requests/channel/channelprofile.get.api';
import { IVideoList } from '@/remote/api/types/channel';

const useChannel = (id: string) => {
  return useQuery<IVideoList>({
    queryKey: ['channelList', id],
    queryFn: () => {
      return getChannelProfile(id);
    },
    staleTime: 86400000,
    cacheTime: 86400000,
  });
};

export default useChannel;

// // import { useQuery } from '@tanstack/react-query';
// import { useQueries } from '@tanstack/react-query';
// import getChannelProfile from '@/remote/api/requests/channel/channelprofile.get.api';
// import { CHANNEL_LIST } from '@/app/channel/page';

// const useChannel = () => {
//   return useQueries({
//     queries: Object.values(CHANNEL_LIST).map((value, index) => {
//       return {
//         queryKey: ['channel', index],
//         queryFn: () => {
//           return getChannelProfile(value);
//         },
//         staleTime: 86400000,
//         cacheTime: 86400000,
//       };
//     }),
//   });
// };

// export default useChannel;
