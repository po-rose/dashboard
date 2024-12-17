import * as styles from './style.css';
import { Check, X } from 'lucide-react';

const plans = [
  {
    id: 1,
    title: 'Basic',
    subtitle: 'For individuals starting out',
    monthlyPrice: 29,
    bestValue: false,
    features: [
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
    ]
  },
  {
    id: 2,
    title: 'Premium',
    subtitle: 'Perfect for growing creators',
    monthlyPrice: 49,
    bestValue: true,
    features: [
      { name: 'YouTube Live', included: true },
      { name: 'Broadcast Portal', included: true },
      { name: 'Basic Support', included: true },
      { name: 'Custom Subdomain', included: true },
      { name: 'No Watermark', included: true },
      { name: 'Customization', included: true },
      { name: 'RTMP Broadcast', included: false },
      { name: 'GDPR Compliant', included: false },
      { name: 'CDN Content', included: false },
      { name: 'Priority Support', included: false },
      { name: 'Rebranding', included: false },
      { name: 'Dedicated Manager', included: false },
    ]
  },
  {
    id: 3,
    title: 'Business',
    subtitle: 'For professional broadcasters',
    monthlyPrice: 99,
    bestValue: false,
    features: [
      { name: 'YouTube Live', included: true },
      { name: 'Broadcast Portal', included: true },
      { name: 'Basic Support', included: true },
      { name: 'Custom Subdomain', included: true },
      { name: 'No Watermark', included: true },
      { name: 'Customization', included: true },
      { name: 'RTMP Broadcast', included: true },
      { name: 'GDPR Compliant', included: true },
      { name: 'CDN Content', included: true },
      { name: 'Priority Support', included: false },
      { name: 'Rebranding', included: false },
      { name: 'Dedicated Manager', included: false },
    ]
  },
  {
    id: 4,
    title: 'Enterprise',
    subtitle: 'Custom solutions for large organizations',
    monthlyPrice: 299,
    bestValue: false,
    features: [
      { name: 'YouTube Live', included: true },
      { name: 'Broadcast Portal', included: true },
      { name: 'Basic Support', included: true },
      { name: 'Custom Subdomain', included: true },
      { name: 'No Watermark', included: true },
      { name: 'Customization', included: true },
      { name: 'RTMP Broadcast', included: true },
      { name: 'GDPR Compliant', included: true },
      { name: 'CDN Content', included: true },
      { name: 'Priority Support', included: true },
      { name: 'Rebranding', included: true },
      { name: 'Dedicated Manager', included: true },
    ]
  }
];

const PricingCard = ({ planId, isAnnual }) => {
  const plan = plans.find(p => p.id === planId);
  if (!plan) return null;

  const calculatePrices = () => {
    if (plan.title === 'Enterprise') {
      return { isCustom: true };
    }

    const monthlyPrice = plan.monthlyPrice;
    const annualPrice = monthlyPrice * 12;
    const discountedAnnual = annualPrice * 0.8; // 20% discount
    const annualSavings = annualPrice - discountedAnnual;

    return {
      monthly: monthlyPrice,
      annual: discountedAnnual,
      savings: annualSavings,
      isCustom: false
    };
  };

  const prices = calculatePrices();

  const renderPrice = () => {
    if (prices.isCustom) {
      return (
        <div className={styles.priceContainer}>
          <p className={styles.price}>
            Custom
          </p>
          <p className={styles.customText}>
          </p>
        </div>
      );
    }

    return (
      <div className={styles.priceContainer}>
        <p className={styles.price}>
          ${isAnnual 
            ? Math.round(prices.annual)
            : prices.monthly.toFixed(2)}
          <span className={styles.month}>
            {isAnnual ? '/year' : '/mo'}
          </span>
        </p>
        {isAnnual && (
          <p className={styles.savings}>
            Save ${Math.round(prices.savings)} per year
          </p>
        )}
      </div>
    );
  };

  return (
    <div 
      className={styles.pricingCard} 
      data-best-value={plan.bestValue}
    >
      <div className={styles.headerSection}>
        {plan.bestValue && (
          <div className={styles.bestValue}>
            Best Value
          </div>
        )}
        <p className={styles.title}>{plan.title}</p>
        <p className={styles.subtitle}>{plan.subtitle}</p>
        {renderPrice()}
      </div>

      <div className={styles.featuresSection}>
        {plan.features.map(({ name, included }, index) => (
          <div key={index} className={styles.featureRow}>
            {included ? (
              <Check size={25} color="#26DC26" />
            ) : (
              <X size={25} color="#DC2626" />
            )}
            <p className={styles.feature}>{name}</p>
          </div>
        ))}
      </div>

      <div className={styles.primaryButton}>
        {plan.title === 'Enterprise' ? 'Contact Sales' : 'Choose Plan'}
      </div>
    </div>
  );
};

export default PricingCard;
