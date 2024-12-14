import * as styles from './style.css';
import { images } from '@/config';
import Image from 'next/image';

const features = [
  { name: 'YouTube Live', included: true },
  { name: 'Broadcast Portal', included: true },
  { name: 'Basic Support', included: true },
  { name: 'Custom Subdomain', included: false },
  { name: 'No Watermark', included: false },
  { name: 'Customization', included: false },
  { name: 'RTMP Broadcast', included: false },
  { name: 'GDPR Compliant', included: false },
  { name: 'CDN Content', included: false },
  { name: 'Priority Support', included: false },
  { name: 'Rebranding', included: false },
  { name: 'Dedicated Manager', included: false },
];

const PricingCard = () => {
  return (
    <div className={styles.pricingCard}>
      <p className={styles.title} style={{ marginTop: '10px' }}>
        Premium Tier 1
      </p>
      <p className={styles.subtitle} style={{ marginTop: '15px' }}>
        Basic Broadcast for individuals
      </p>

      <div className={styles.bestValue} style={{ marginTop: '10px' }}>
        Best Value
      </div>
      <p className={styles.price} style={{ marginTop: '10px' }}>
        $49.00 <span className={styles.month}>/mo</span>
      </p>

      {features.map(({ name, included }) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center', margin: '9px 0' }}>
            <Image src={included ? images.tick : images.cross} height={20} width={20} />
            <p className={styles.feature}>{name}</p>
          </div>
        );
      })}

      <div className={styles.primaryButton}>Downgrade</div>
    </div>
  );
};
export default PricingCard;
