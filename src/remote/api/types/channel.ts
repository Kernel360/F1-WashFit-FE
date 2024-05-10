export interface IVideoList {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: IVideo[];
}

export interface IVideo {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: IVideoInfo;
}

export interface IVideoInfo {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: IThumbnail;
    medium: IThumbnail;
    high: IThumbnail;
  };
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface IThumbnail {
  url: string;
  width: number;
  height: number;
}
