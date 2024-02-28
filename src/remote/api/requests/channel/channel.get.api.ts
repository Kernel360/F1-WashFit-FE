import axios from 'axios';

import { IVideoList } from '../../types/channel';

/* ----- channel youtube api ----- */
export const getChannelList = async (
  channelId: string,
  part = 'snippet',
  order = 'date',
  maxResults = 5,
) => {
  const response = await axios.get<IVideoList>(
    `${process.env.NEXT_PUBLIC_YOUTUBE_BASE_URL}/search`,
    {
      params: {
        part,
        channelId,
        order,
        maxResults,
        key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
      },
    },
  );

  return response.data;
};
