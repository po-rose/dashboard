import { images } from '@/config';
import * as styles from './style.css';
import Image from 'next/image';
import { ImageUp } from 'lucide-react';

const ImageUploader = ({ label, title }) => {
  return (
    <div className={styles.card}>
      <p className={styles.cardTitle}>{title}</p>
      <div
        style={{
          backgroundColor: 'rgba(43, 43, 43, 1)',
          borderRadius: '100px',
          height: '100px',
          width: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ImageUp />
        {/* <Image src={images.uploader} width={42} height={42} alt='upload' /> */}
      </div>
      <p style={{ marginTop: '10px', fontSize: '14px', fontWeight: 400 }}>{label}</p>
    </div>
  );
};

const UploadComponent = ({ label, required }) => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', columnGap: '50px', marginTop: '20px' }}>
        <div>
          <label className={styles.labelStyle}>
            Live
            {required && <span className={styles.required}>*</span>}
          </label>
          <ImageUploader label='Upload ( 1:1 ratio )' title={'Live Thumbnail'} />
        </div>

        <div>
          <label className={styles.labelStyle}>
            VOD
            {required && <span className={styles.required}>*</span>}
          </label>
          <ImageUploader label='Upload ( 1:1 ratio )' title={'VOD Thumbnail'} />
        </div>
      </div>
    </div>
  );
};

export default UploadComponent;
