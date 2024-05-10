/* eslint-disable react/no-array-index-key */

/* eslint-disable  jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

'use client';

import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';

import LeftIcon from '@/components/shared/header/headerItems/LeftIcon';
import Title from '@components/shared/title/Title';
import useYoutubeList from '@remote/queries/channel/useYoutubeList';
import BottomNav from '@shared/bottom-nav/BottomNav';
import ChannelArticle from '@shared/channel-article/ChannelArticle';
import useChannel from '@/remote/queries/channel/useChannel';
import Image from 'next/image';
import Flex from '@/components/shared/flex/Flex';
import styles from './page.module.scss';

const cx = classNames.bind(styles);

export const CHANNEL_LIST = {
  DetailWizard: 'UCJM63e_MydEL2o6dMuJ_teQ',
  ShineFreak: 'UCoqiH2Ce3qc8wr_t2GvIWvw',
  autogrm: 'UCKUHhKTlNTHRlwbjoFDKOfA',
  AutobriteDirectKorea: 'UCHVO8oWoMCIIdQHXUB32X1w',
  saealnam: 'UCB22mXLQeRlCPn-H000OxYg',
};

function ChannelPage() {
  const [selectedChannel, setSelectedChannel] = useState(Object.values(CHANNEL_LIST)[0]);

  const { data: dataList, isError } = useYoutubeList(selectedChannel);
  const [scroll, setScroll] = useState(true);

  const handleChannel = (channelId: string) => {
    setSelectedChannel(channelId);
  };

  const { data: channelList1 } = useChannel('UCJM63e_MydEL2o6dMuJ_teQ');
  const { data: channelList2 } = useChannel('UCoqiH2Ce3qc8wr_t2GvIWvw');
  const { data: channelList3 } = useChannel('UCKUHhKTlNTHRlwbjoFDKOfA');
  const { data: channelList4 } = useChannel('UCHVO8oWoMCIIdQHXUB32X1w');
  const { data: channelList5 } = useChannel('UCB22mXLQeRlCPn-H000OxYg');

  const channelList = [
    channelList1,
    channelList2,
    channelList3,
    channelList4,
    channelList5,
  ];

  // console.log(channelList);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const checkScrollTop = () => {
      const currentScroll = document.documentElement.scrollTop;
      if (currentScroll > 100 && lastScroll <= 100) {
        setScroll(false);
        setLastScroll(currentScroll);
      } else if (currentScroll <= 100 && lastScroll > 100) {
        setScroll(true);
        setLastScroll(currentScroll);
      }
    };

    const intervalId = setInterval(checkScrollTop, 100); // 1초에 한 번씩 checkScrollTop 함수를 호출

    return () => {
      clearInterval(intervalId); // 컴포넌트가 언마운트될 때 타이머를 정리
    };
  }, [lastScroll]);
  return (
    <>
      <main className={cx('mainContainer')}>
        <div className={cx('headerFix')}>
          <div className={cx('headerTitleWrapper')}>
            <LeftIcon className={cx('left')} type="search" />
            <Title title="추천 페이지" titleSize="t4" />
          </div>
          <ul className={cx('channelList')}>
            {Object.entries(CHANNEL_LIST).map(([channelName, channelId], idx) => {
              return (
                <li
                  onClick={() => {
                    return handleChannel(channelId);
                  }}
                  key={idx}
                >
                  <Flex direction="column" align="center" justify="center">
                    <Image
                      className={cx(scroll ? 'channelImage' : 'imageNone')}
                      src={
                        channelList[idx]?.items[0]?.snippet.thumbnails.high.url as string
                      }
                      alt="유튜브 채널 썸네일"
                      width={320}
                      height={180}
                      layout="cover"
                      objectFit="responsive"
                    />
                    <button
                      aria-label="채널 버튼"
                      className={cx(
                        'channelButton',
                        selectedChannel === channelId ? 'selected' : '',
                      )}
                      onClick={() => {
                        return handleChannel(channelId);
                      }}
                    >
                      {channelName}
                    </button>
                  </Flex>
                </li>
              );
            })}
          </ul>
        </div>
        <div>{/* {channelList?.items?.thumbnails.high.url} */}</div>
        {isError && <div className={cx('error')}>서버요청을 초과하였습니다.</div>}
        {dataList?.items?.map((data, idx) => {
          return <ChannelArticle key={idx} data={data} />;
        })}
      </main>
      <BottomNav />
    </>
  );
}

export default ChannelPage;
