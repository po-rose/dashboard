import { LockKeyhole, Fingerprint } from 'lucide-react';
import * as styles from './style.css';

const IconButton = ({ height, width, color = 'black', bgColor = 'white', btnText, variant = 'default' }) => {
  const isSecondary = variant === 'secondary';
  const initialBrightness = isSecondary ? 'brightness(100)' : 'brightness(0)';
  
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: isSecondary ? 'white' : 'black',
        height,
        width,
        transition: 'all 0.0s ease-in-out',
        cursor: 'pointer',
      }}
      className={styles.buttonStyles}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#181818';
        e.currentTarget.style.color = 'white';
        e.currentTarget.querySelector('div').style.filter = 'brightness(100)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = bgColor;
        e.currentTarget.style.color = isSecondary ? 'white' : 'black';
        e.currentTarget.querySelector('div').style.filter = initialBrightness;
      }}
    >
      <div style={{ filter: initialBrightness, transition: 'all 0.0s ease-in-out' }}>
        {isSecondary ? <Fingerprint size={15} /> : <LockKeyhole size={15} />}
      </div>
      <span style={{ marginLeft: '10px', color: 'inherit' }}>{btnText}</span>
    </div>
  );
};

export default IconButton;
