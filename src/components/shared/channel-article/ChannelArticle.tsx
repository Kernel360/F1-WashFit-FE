// import YouTube from 'react-youtube';

import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

import { IVideo } from '@remote/api/types/channel';
import Text from '@shared/text/Text';

import styles from './ChannelArticle.module.scss';
import ChannelMoreBtn from './ChannelMoreBtn';

interface ChannelArticleProps {
  data: IVideo;
}

const cx = classNames.bind(styles);

// const VIDEO_OPTS = {
//   width: '100%',
//   height: '100%',
//   playerVars: {
//     autoplay: 0,
//   },
// };

function ChannelArticle({ data }: ChannelArticleProps) {
  // console.log(data.id.videoId);
  return (
    <article className={cx('article')}>
      <div>
        <Link
          className={cx('videoContainer')}
          href={`https://www.youtube.com/watch?v=${data.id.videoId}`}
        >
          <div className={cx('videoContainer')}>
            <Image
              className={cx('video')}
              src={data.snippet.thumbnails.high.url}
              alt="유튜브 동영상"
              width={320}
              height={150}
              layout="cover"
              objectFit="responsive"
            />
            {/* <YouTube className={cx('video')} videoId={data.id.videoId} opts={VIDEO_OPTS} /> */}
          </div>
        </Link>
        <div className={cx('videoInfoContainer')}>
          {/* <div className={cx('imgBox')}>
          <img
            src={data.profile}
            alt="유튜버 프로필 이미지"
            width={0}
            height={0}
            layout="responsive"
          />
        </div> */}
          <div className={cx('infoBox')}>
            <Text className="ellipsis" typography="t6" whiteSpace="nowrap">
              {data.snippet.title}
            </Text>
            <Text
              className="ellipsis"
              typography="t7"
              color="gray300"
              whiteSpace="nowrap"
            >
              {data.snippet.description}
            </Text>
          </div>
          <ChannelMoreBtn />
        </div>
      </div>
    </article>
  );
}

export default ChannelArticle;
