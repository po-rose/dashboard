import { card, cardTitle, percentageStyle, deviceStyle } from './style.css';

const DevicesCard = () => {
  return (
    <div className={card}>
      <p className={cardTitle}>Devices</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '10px',
        }}
      >
        <div>
          <p className={percentageStyle}>60%</p>
          <p className={deviceStyle}>Mobile</p>
        </div>
        <div>
          <p className={percentageStyle}>40%</p>
          <p className={deviceStyle}>Desktop</p>
        </div>
      </div>
    </div>
  );
};

export default DevicesCard;
