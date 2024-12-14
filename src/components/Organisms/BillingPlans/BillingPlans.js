import { cols3, cols4 } from './style.css';
import { Clock4, Eye, Server } from 'lucide-react';

import HeadingInfo from '@/components/Atoms/HeadingInfo';
import ProgressCard from '@/components/Atoms/Cards/ProgressCard';
import PricingCard from '@/components/Atoms/Cards/PricingCard';

const BillingPlans = () => {
  return (
    <div style={{ padding: '40px' }}>
      <HeadingInfo
        showIcon={false}
        text={'Monthly plan limits'}
        iconSize={18}
        popupText={
          'Monthly limits reset at the start of each billing month. For annual subscriptions, limits will reset on the same day each month based on the start date of the annual billing cycle.'
        }
      />
      <div className={cols3}>
        <ProgressCard
          value={12}
          title={'Streaming Hours'}
          icon={<Clock4 color='#60A5FA' />}
          color={'rgba(96, 165, 250, 1)'}
          hoverText={
            'Total hours of live content streamed directly to viewers using RTMP protocol broadcast'
          }
        />
        <ProgressCard
          value={350}
          hoverText={
            'Total viewer hours spent watching live RTMP broadcasts and video-on-demand (VOD) content'
          }
          title={'Viewing Hours'}
          icon={<Eye color='#48D179' />}
          color={'rgba(72, 209, 121, 1)'}
        />
        <ProgressCard
          value={'164 GB'}
          hoverText={
            'Amount of storage utilized on our CDN network for hosting and delivering VODs to your viewers.'
          }
          title={'Storage Used'}
          color={'rgba(163, 114, 213, 1)'}
          icon={<Server color='#A372D5' />}
        />
      </div>

      <div style={{ backgroundColor: '#212121', padding: '40px', margin: '20px 0px' }}>
        <div className={cols4}>
          {Array(4)
            .fill(0)
            .map(() => (
              <PricingCard />
            ))}
        </div>
      </div>
    </div>
  );
};
export default BillingPlans;
