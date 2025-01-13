'use client';
import * as styles from './style.css';
import { Eye, PlayCircle, ArrowLeftFromLine } from 'lucide-react';

const ManageNavbar = () => {
 
  return (
    <div className={styles.manageNavbar}>
      <div className={styles.dateStyle}>
        <p className={styles.titleStyle}>Start Date & Time</p>
        <div className={styles.buttonRowStyle}>
          <div className={styles.exitButtonStyle}>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4395 29.375C16.68 29.375 16.0645 28.7594 16.0645 28C16.0645 27.2949 16.5952 26.7137 17.2791 26.6343L17.4395 26.625H24.3145C25.0196 26.625 25.6008 26.0942 25.6802 25.4104L25.6895 25.25L25.6895 8.75C25.6895 8.04483 25.1586 7.46367 24.4748 7.38425L24.3145 7.375H18.127C17.3675 7.375 16.752 6.75941 16.752 6C16.752 5.29483 17.2827 4.71367 17.9666 4.63425L18.127 4.625H24.3145C26.5113 4.625 28.307 6.34221 28.4325 8.50762L28.4395 8.75L28.4395 25.25C28.4395 27.4468 26.7222 29.2425 24.5568 29.368L24.3145 29.375L17.4395 29.375ZM9.59233 21.8614L5.70314 17.9723C5.16621 17.4353 5.16621 16.5647 5.70314 16.0277L9.59233 12.1387C10.1293 11.6016 10.9998 11.6016 11.5369 12.1387C12.0738 12.6756 12.0738 13.5463 11.5369 14.0832L9.99493 15.625L17.4395 15.625C18.1989 15.625 18.8145 16.2406 18.8145 17C18.8145 17.7594 18.1989 18.375 17.4395 18.375L9.99493 18.375L11.5369 19.9168C12.0738 20.4538 12.0738 21.3244 11.5369 21.8614C10.9998 22.3983 10.1293 22.3983 9.59233 21.8614Z" fill="white"/>
          </svg>

            {/* <ArrowLeftFromLine color='white' size={33}/> */}
          </div>
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
