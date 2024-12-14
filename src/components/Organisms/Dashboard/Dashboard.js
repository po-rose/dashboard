import BroadcastCard from '@/components/Atoms/Cards/BroadcastCard';
import Table from '@/components/Atoms/Table';
import ViewersCard from '@/components/Atoms/Cards/ViewersCard';
import DevicesCard from '@/components/Atoms/Cards/DevicesCard';
import ProgressCard from '@/components/Atoms/Cards/ProgressCard';
import { images } from '@/config';
import { cols2, cols3, container } from './style.css';
import HeadingInfo from '@/components/Atoms/HeadingInfo';
import { Clock4, Eye, Server } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className={container} style={{ padding: '40px 0' }}>
      <div className={cols2}>
        <BroadcastCard
          cardSubtitle={'Upcoming'}
          cardTitle={'Scheduled Broadcasts'}
          cardValue={12}
        />
        <BroadcastCard cardSubtitle={'All time'} cardTitle={'Total Broadcasts'} cardValue={156} />
      </div>
      <div style={{ marginTop: '40px' }}>
        <Table />
      </div>
      <div style={{ marginTop: '40px' }}>
        <p style={{ fontWeight: 600, fontSize: '18px' }}>Recent Performance</p>
        <div style={{ marginTop: '10px' }} className={cols2}>
          <ViewersCard />
          <DevicesCard />
        </div>
      </div>
      <div style={{ marginTop: '40px' }}>
        <HeadingInfo
          text={'Monthly plan limits'}
          iconSize={18}
          popupText={
            'Monthly limits reset at the start of each billing month. For annual subscriptions, limits will reset on the same day each month based on the start date of the annual billing cycle.'
          }
        />
        <div className={cols3}>
          <ProgressCard
            value={0}
            additionalText={'/ N/A'}
            showProgressBar={false}
            title={'Streaming Hours'}
            icon={<Clock4 color='#60A5FA' />}
            color={'rgba(96, 165, 250, 1)'}
            hoverText={
              'Total hours of live content streamed directly to viewers using RTMP protocol broadcast'
            }
          />
          <ProgressCard
            value={0}
            additionalText={'/ N/A'}
            showProgressBar={false}
            hoverText={
              'Total viewer hours spent watching live RTMP broadcasts and video-on-demand (VOD) content'
            }
            title={'Viewing Hours'}
            icon={<Eye color='#48D179' />}
            color={'rgba(72, 209, 121, 1)'}
          />
          <ProgressCard
            value={'0 GB'}
            additionalText={'/ N/A'}
            showProgressBar={false}
            hoverText={
              'Amount of storage utilized on our CDN network for hosting and delivering VODs to your viewers.'
            }
            title={'Storage Used'}
            color={'rgba(163, 114, 213, 1)'}
            icon={<Server color='#A372D5' />}
          />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
