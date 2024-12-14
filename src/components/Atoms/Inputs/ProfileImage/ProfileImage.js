import { images } from '@/config';
import Image from 'next/image';

const ProfileImage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Image src={images.avatar} width={150} height={150} alt='Profile Avatar' />
      <div style={{ position: 'absolute', right: 5, bottom: 20 }}>
        <Image src={images.profileSettings} width={30} height={30} alt='Profile Avatar' />
      </div>
    </div>
  );
};

export default ProfileImage;
