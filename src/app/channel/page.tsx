/* eslint-disable react/no-array-index-key */

'use client';

import { useState } from 'react';

import classNames from 'classnames/bind';

import Title from '@components/shared/title/Title';
import useYoutubeList from '@remote/queries/channel/useYoutubeList';
import BottomNav from '@shared/bottom-nav/BottomNav';
import ChannelArticle from '@shared/channel-article/ChannelArticle';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

const channelList = {
  DetailWizard: 'UCJM63e_MydEL2o6dMuJ_teQ',
  ShineFreak: 'UCoqiH2Ce3qc8wr_t2GvIWvw',
  autogrm: 'UCKUHhKTlNTHRlwbjoFDKOfA',
  AutobriteDirectKorea: 'UCHVO8oWoMCIIdQHXUB32X1w',
  saealnam: 'UCB22mXLQeRlCPn-H000OxYg',
};

function ChannelPage() {
  const [selectedChannel, setSelectedChannel] = useState(Object.values(channelList)[0]);

  const { data: dataList, isError } = useYoutubeList(selectedChannel);

  const handleChannel = (channelId: string) => {
    setSelectedChannel(channelId);
  };

  return (
    <>
      <div className={cx('headerTitleContainer')}>
        <Title title="유튜브 추천 채널" titleSize="t3" />
      </div>
      <main className={cx('mainContainer')}>
        <ul className={cx('channelList')}>
          {Object.entries(channelList).map(([channelName, channelId], idx) => {
            return (
              <li key={idx}>
                <button aria-label="채널 버튼" className={cx('channelButton', selectedChannel === channelId ? 'selected' : '')} onClick={() => { return handleChannel(channelId); }}>
                  {channelName}
                </button>
              </li>
            );
          })}
        </ul>

        {isError && (<div className={cx('error')}>서버요청을 초과하였습니다.</div>)}
        {dataList?.items?.map((data, idx) => {
          return (
            <ChannelArticle key={idx} data={data} />
          );
        })}
      </main>
      <BottomNav />
    </>
  );
}

export default ChannelPage;
