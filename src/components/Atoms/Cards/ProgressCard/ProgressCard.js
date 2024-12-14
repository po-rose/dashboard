import HeadingInfo from '../../HeadingInfo';
import { card, progressBarStyle, fillStyle } from './style.css';
import Image from 'next/image';

const ProgressCard = ({
  icon,
  title,
  color,
  hoverText,
  showProgressBar = true,
  additionalText = '/ Unlimited hours',
  value,
}) => {
  return (
    <div className={card}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <HeadingInfo text={title} iconSize={15} popupText={hoverText} />
        {icon}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <p style={{ fontWeight: 700, fontSize: '35px' }}>{value}</p>
        <p style={{ fontWeight: 400, fontSize: '18px', color: 'rgba(255, 255, 255, 0.6)' }}>
          {additionalText}
        </p>
      </div>
      {showProgressBar && (
        <div className={progressBarStyle}>
          <div className={fillStyle} style={{ width: `${50}%`, backgroundColor: color }} />
        </div>
      )}
      {showProgressBar && (
        <p
          style={{
            fontSize: '12px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.6)',
            marginTop: '10px',
          }}
        >
          $2.00 per additional hour
        </p>
      )}
    </div>
  );
};
export default ProgressCard;
