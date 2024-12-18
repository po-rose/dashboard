import { useState } from 'react';
import { cols3, headerContainer, upgradeButton, limitsTable, tableHeader, tableCell, additionalInfo, bulletPoint } from './style.css';
import { Clock4, Eye, Server, ExternalLink } from 'lucide-react';
import ProgressCard from '@/components/Atoms/Cards/ProgressCard';
import SectionTitle from './SectionTitle';

const UpgradeButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={upgradeButton}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p style={{ 
        fontSize: '14px', 
        fontWeight: '500', 
        marginLeft: '5px', 
        color: 'inherit',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        Manage Plan
        <ExternalLink size={14} color={isHovered ? '#000000' : '#FFFFFF'} />
      </p>
    </div>
  );
};

const Usage = () => {
  return (
    <div>
      <div className={headerContainer}>
        <SectionTitle text="Usage Overview" />
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

      <div style={{ marginTop: '40px' }}>
        <SectionTitle text="Plan Limits" />
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

export default Usage; 