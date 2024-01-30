import classNames from 'classnames/bind';

import BottomNav from '@shared/bottom-nav/BottomNav';
import ChannelArticle from '@shared/channel-article/ChannelArticle';
import Header from '@shared/header/Header';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

const dataList = [{
  id: 1,
  src: 'https://www.youtube.com/embed/DNJ5JqLw9YM?si=6hCG8Rz87EMX-LQE',
  alt: 'YouTube video player',
  profile: '/assets/profile.JPG',
  title: '일을 위해 2 시간 지브리 bmg 🚖 편안한 지브리 음악, 지브리 스튜디오',
  description: '일을 위해 2 시간 지브리 bmg 🚖 편안한 지브리 음악, 지브리 스튜디오',
}, {
  id: 2,
  src: 'https://www.youtube.com/embed/m6XwKBMsZk0?si=K3BkPDtIoelv-ZI5',
  alt: 'YouTube video player',
  profile: '/assets/video.png',
  title: 'Teddy Swims - Cruel Summer (Taylor Swift cover) in the Live Lounge',
  description: 'Teddy Swims - Cruel Summer (Taylor Swift cover) in the Live Lounge',
}, {
  id: 3,
  src: 'https://www.youtube.com/embed/_QWZQh0YYWA?si=gGqweAyaiuSp9sBN',
  alt: 'YouTube video player',
  profile: '/assets/video.png',
  title: 'Teddy Swims - You\'re Still The One (Shania Twain Cover)',
  description: 'Teddy Swims - You\'re Still The One (Shania Twain Cover)',
}];

function ChannelPage() {
  return (
    <div>
      <Header className={cx('header')} />
      <main className={cx('mainContainer')}>
        {dataList.map((data) => {
          return (
            <ChannelArticle key={data.id} data={data} />
          );
        })}
      </main>
      <BottomNav />
    </div>
  );
}

export default ChannelPage;
