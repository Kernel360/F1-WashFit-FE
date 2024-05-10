import axios from 'axios';
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { IVideoList } from '../../types/channel';

const getChannelProfile = async (id: string, part = 'snippet') => {
  const response = await axios.get<IVideoList>(
    `${process.env.NEXT_PUBLIC_YOUTUBE_BASE_URL}/channels`,
    {
      params: {
        id,
        part,
        key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
      },
    },
  );
  return response.data;
};

export default getChannelProfile;
