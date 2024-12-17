import Image from 'next/image';
import * as styles from './style.css';
import { images } from '@/config';
import { Globe, ImageUp } from 'lucide-react';

const ImageUploader = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(33, 33, 33, 1)',
        borderRadius: '16px',
        padding: '20px',
      }}
    >
      <p className={styles.sectionTitle}>{data?.title}</p>
      <p className={styles.sectionSubTitle}>{data?.subTitle}</p>

      <div
        style={{
          marginTop: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '20px 20px 40px 20px',
        }}
      >
        <div className={styles.iconContainer}>
          {data?.icon}
        </div>
        <p style={{ fontSize: '12px', fontWeight: 400, marginTop: '10px' }}>{data?.label}</p>
      </div>
    </div>
  );
};

const mockData = [
  {
    icon: <ImageUp size={40} />,
    label: 'File upload field for image files (e.g., PNG, JPEG)',
    title: 'Logo Upload',
    subTitle: 'Upload a custom logo for your portal.',
  },
  {
    icon: <Globe size={40} />,
    label: 'File upload field for favicon files (e.g., ICO, PNG).',
    title: 'Favicon Upload',
    subTitle: 'Upload a favicon for your portal (preferably 32x32 pixels in .ico format).',
  },
];

const LogoUpload = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px' }}>
      {mockData.map((data) => (
        <div style={{ width: '100%' }}>
          <ImageUploader data={data} />
        </div>
      ))}
    </div>
  );
};
export default LogoUpload;
