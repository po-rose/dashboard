'use client';
import * as styles from './style.css';
import { Eye, PlayCircle, ArrowLeftFromLine } from 'lucide-react';

const ManageNavbar = () => {
 
  return (
    <div className={styles.manageNavbar}>
      <div className={styles.dateStyle}>
        <p className={styles.titleStyle}>Start Date & Time</p>
        <div className={styles.buttonRowStyle}>
          <div className={styles.exitButtonStyle}><ArrowLeftFromLine color='white' size={33}/></div>
          <div className={styles.dateLabelStyle}> 09/13/2024 08:52 AM</div>
          <div className={styles.nowButtonStyle}>Now</div>
        </div>
      </div>
      <div className={styles.buttonRowStyle}>
        <div className={styles.overlayButtonStyle}>
          <Eye color='white' size={20}/>
          <p className={styles.buttonText}>Overlay</p>
        </div> 
        <div className={styles.goLiveButtonStyle}>
          <PlayCircle color='white' size={20}/>
          <p className={styles.buttonText}>Go Live</p>
        </div>
      </div> 
    </div>
  );
};

export default ManageNavbar;
