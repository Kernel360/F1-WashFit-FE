import classNames from 'classnames/bind';
import Image from 'next/image';

import Text from '@shared/text/Text';

import styles from './ChannelArticle.module.scss';
import ChannelMoreBtn from './ChannelMoreBtn';
// import { IVideoData } from './types/ChannelArticleType';

// interface ChannelArticleProps {
//   data: IVideoData;
// }
/*
 * data는 백엔드에서 넘어오는 데이터를 참고해서 다시 바뀔 수 있음
 * Channel 페이지 구현시 data에 맞게 값 넣어줄 것
*/
const cx = classNames.bind(styles);

// function ChannelArticle({ data }: ChannelArticleProps) {
function ChannelArticle() {
  return (
    <article className={cx('article')}>
      <div className={cx('videoContainer')}>
        <iframe
        //   src={data.src}
          src="https://www.youtube.com/embed/DNJ5JqLw9YM?si=6hCG8Rz87EMX-LQE"
          title="YouTube video player"
          allowFullScreen
        />
      </div>
      <div className={cx('videoInfoContainer')}>
        <div className={cx('imgBox')}>
          <Image
            // src={data.profile}
            src="/assets/video.png"
            alt="유튜버 프로필 이미지"
            width={0}
            height={0}
            layout="responsive"
          />
        </div>
        <div className={cx('infoBox')}>
          {/* <Text className="ellipsis" typography="t6" whiteSpace="nowrap">
          {data.title}
          </Text> */}
          <Text className="ellipsis" typography="t6" whiteSpace="nowrap">title</Text>
          {/* <Text className="ellipsis" typography="t7" color="gray300" whiteSpace="nowrap">
          {data.description}
          </Text> */}
          <Text className="ellipsis" typography="t7" color="gray300" whiteSpace="nowrap">description</Text>
        </div>
        <ChannelMoreBtn />
      </div>
    </article>
  );
}

export default ChannelArticle;
