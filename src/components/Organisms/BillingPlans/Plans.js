import { cols3, cols4, headerContainer, upgradeButton, buttonIcon, limitsTable, tableHeader, tableCell, additionalInfo, bulletPoint } from './style.css';
import { Clock4, Eye, Server, ArrowUpCircle } from 'lucide-react';
import HeadingInfo from '@/components/Atoms/HeadingInfo';
import ProgressCard from '@/components/Atoms/Cards/ProgressCard';
import PricingCard from '@/components/Atoms/Cards/PricingCard';
import SectionTitle from './SectionTitle';
import ToggleSwitch from '@/components/Atoms/Inputs/ToggleSwitch';
import { useState } from 'react';

const UpgradeButton = () => {
  return (
    <div className={upgradeButton}>
      <p style={{ fontSize: '14px', fontWeight: '500', marginLeft: '5px', color: 'inherit' }}>
        Manage Plan
      </p>
    </div>
  );
};

const BillingToggle = ({ isAnnual, setIsAnnual }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <span style={{ color: isAnnual ? 'rgba(255, 255, 255, 0.6)' : '#fff' }}>Monthly</span>
      <ToggleSwitch 
        checked={isAnnual}
        onChange={(e) => setIsAnnual(e.target.checked)} 
      />
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: '-25px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#EAB308',
          color: 'black',
          padding: '3px 5px',
          borderRadius: '12px',
          fontSize: '11px',
          fontWeight: '600',
          whiteSpace: 'nowrap'
        }}>
          Save 20%
        </div>
        <span style={{ color: !isAnnual ? 'rgba(255, 255, 255, 0.6)' : '#fff' }}>Annual</span>
      </div>
    </div>
  );
};

const Plans = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div style={{ marginTop: '20px' }}>
      <div className={headerContainer}>
        <SectionTitle text="Your Current Plan: Enterprise" />
        <UpgradeButton />
      </div>
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

      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: '30px'
      }}>
        <SectionTitle text="Compare Plans" />
        <BillingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
      </div>
      <div style={{ backgroundColor: '#212121', padding: '40px', borderRadius: '16px' }}>
        <div className={cols4}>
          {[1, 2, 3, 4].map((planId) => (
            <PricingCard key={planId} planId={planId} isAnnual={isAnnual} />
          ))}
        </div>
      </div>

      <div style={{ marginTop: '40px' }}>
        <SectionTitle text="Plans Limits" />
        <div style={{ backgroundColor: '#212121', padding: '40px', borderRadius: '16px' }}>
          <table className={limitsTable}>
            <thead style={{
              backgroundColor: '#2A2A2A',
              borderRadius: '16px',
              padding: '20px',
            }}>
              <tr>
                <th className={tableHeader} style={{ textAlign: 'center' }}>Limits</th>
                <th className={tableHeader} style={{ textAlign: 'center' }}>Free</th>
                <th className={tableHeader} style={{ textAlign: 'center' }}>Premium Tier 1</th>
                <th className={tableHeader} style={{ textAlign: 'center' }}>Premium Tier 2</th>
                <th className={tableHeader} style={{ textAlign: 'center' }}>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tableCell} style={{ textAlign: 'center' }}>Portals</td>
                <td className={tableCell} style={{ textAlign: 'center' }}>1</td>
                <td className={tableCell} style={{ textAlign: 'center' }}>1</td>
                <td className={tableCell} style={{ textAlign: 'center' }}>3</td>
                <td className={tableCell} style={{ textAlign: 'center' }}>Custom</td>
              </tr>
              <tr>
                <td className={tableCell} style={{ textAlign: 'center' }}>Streaming Hours</td>
                <td className={tableCell} style={{ textAlign: 'center' }}>Not applicable</td>
                <td className={tableCell} style={{ textAlign: 'center' }}>
                  10
                  <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)', marginTop: '4px' }}>
                    ($4.00 per additional hour)
                  </div>
                </td>
                <td className={tableCell} style={{ textAlign: 'center' }}>
                  15
                  <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)', marginTop: '4px' }}>
                    ($2.00 per additional hour)
                  </div>
                </td>
                <td className={tableCell} style={{ textAlign: 'center' }}>Custom</td>
              </tr>
              <tr>
                <td className={tableCell} style={{ textAlign: 'center' }}>Viewing Hours</td>
                <td className={tableCell} style={{ textAlign: 'center' }}>Not applicable</td>
                <td className={tableCell} style={{ textAlign: 'center' }}>
                  250
                  <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)', marginTop: '4px' }}>
                    ($0.20 per additional hour)
                  </div>
                </td>
                <td className={tableCell} style={{ textAlign: 'center' }}>
                  500
                  <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)', marginTop: '4px' }}>
                    ($0.10 per additional hour)
                  </div>
                </td>
                <td className={tableCell} style={{ textAlign: 'center' }}>Custom</td>
              </tr>
              <tr>
                <td className={tableCell} style={{ textAlign: 'center' }}>Storage (GB)</td>
                <td className={tableCell} style={{ textAlign: 'center' }}>Not applicable</td>
                <td className={tableCell} style={{ textAlign: 'center' }}>
                  Pay as you go
                  <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)', marginTop: '4px' }}>
                    ($0.20 per additional GB per month)
                  </div>
                </td>
                <td className={tableCell} style={{ textAlign: 'center' }}>
                  Pay as you go
                  <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)', marginTop: '4px' }}>
                    ($0.20 per additional GB per month)
                  </div>
                </td>
                <td className={tableCell} style={{ textAlign: 'center' }}>Custom</td>
              </tr>
            </tbody>
          </table>

          <div className={additionalInfo}>
            <div style={{ color: 'rgba(255, 255, 255, 0.4)', paddingLeft: '16px' }}>Additional charges may apply if you exceed your plan limits:</div>
            <div className={bulletPoint}>• Streaming hours : Additional charges per hour beyond your plan limit</div>
            <div className={bulletPoint}>• Viewing hours : Additional charges per hour beyond your plan limit</div>
            <div className={bulletPoint}>
              For specific pricing on additional usage, please refer to your plan details or contact our sales team.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans; 