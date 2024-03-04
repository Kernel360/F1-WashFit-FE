import YouTube from 'react-youtube';

import classNames from 'classnames/bind';
// import Image from 'next/image';

import { IVideo } from '@remote/api/types/channel';
import Text from '@shared/text/Text';

import styles from './ChannelArticle.module.scss';
import ChannelMoreBtn from './ChannelMoreBtn';

interface ChannelArticleProps {
  data: IVideo;
}

const cx = classNames.bind(styles);

const VIDEO_OPTS = {
  width: '100%',
  height: '100%',
  playerVars: {
    autoplay: 0,
  },
};

function ChannelArticle({ data }: ChannelArticleProps) {
  return (
    <article className={cx('article')}>
      <div className={cx('videoContainer')}>
        <YouTube className={cx('video')} videoId={data.id.videoId} opts={VIDEO_OPTS} />
      </div>
      <div className={cx('videoInfoContainer')}>
        {/* <div className={cx('imgBox')}>
          <Image
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
          <Text className="ellipsis" typography="t7" color="gray300" whiteSpace="nowrap">
            {data.snippet.description}
          </Text>
        </div>
        <ChannelMoreBtn />
      </div>
    </article>
  );
}

export default ChannelArticle;
