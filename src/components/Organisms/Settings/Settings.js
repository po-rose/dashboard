import ProfileImage from '@/components/Atoms/Inputs/ProfileImage';
import TextInput from '@/components/Atoms/Inputs/TextInput';
import SettingDetail from '@/components/Molecules/SettingDetail';
import IconButton from '@/components/Atoms/Button/IconButton';
import { images } from '@/config';
import ToggleSwitch from '@/components/Atoms/Inputs/ToggleSwitch';
import * as styles from './style.css';
import PrimaryButton from '@/components/Atoms/Button/PrimaryButton';

const SectionHeading = ({ text }) => {
  return <p className={styles.sectionHeading}>{text}</p>;
};

const Settings = () => {
  return (
    <div>
      {/* Profile Image Name and company */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '16px',
          padding: '20px',
          columnGap: '10px',
          background: 'rgba(33, 33, 33, 1)',
          margin: '40px 30px',
        }}
      >
        <ProfileImage />
        <div style={{ width: '100%' }}>
          <TextInput label={'Name'} placeholder={'enter your name'} />
          <TextInput label={'Company'} placeholder={'enter your company'} />
        </div>
      </div>

      {/* Contact Information */}

      <SectionHeading text={'Contact information'} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '16px',
          padding: '20px',
          columnGap: '10px',
          background: 'rgba(33, 33, 33, 1)',
          margin: '10px 30px',
        }}
      >
        <div style={{ width: '100%' }}>
          <TextInput label={'Email Address'} placeholder={'enter email address'} />
        </div>
        <div style={{ width: '100%' }}>
          <TextInput label={'Phone Number'} placeholder={'enter phone number'} />
        </div>
      </div>

      {/* Security */}
      <SectionHeading text={'Security'} />

      <div
        style={{
          padding: '5px 20px',
          background: 'rgba(33, 33, 33, 1)',
          margin: '10px 30px',
          borderRadius: '16px',
        }}
      >
        <div style={{ margin: '20px 0px' }}>
          <SettingDetail
            title={'Password'}
            subtitle={'Last changed 3 months ago'}
            cta={
              <IconButton
                height={'31px'}
                width={'172px'}
                btnText={'Change Password'}
                icon={images.lock}
              />
            }
          />
        </div>
        <div style={{ margin: '40px 0px 10px 0px' }}>
          <SettingDetail
            title={'Two-Factor Authentication'}
            subtitle={'Enhance your account security'}
            cta={
              <IconButton
                color='white'
                height={'31px'}
                width={'139px'}
                bgColor='#2A2A2A'
                btnText={'Enable 2FA'}
                icon={images.mail}
              />
            }
          />
        </div>
      </div>

      {/* Preference */}
      <SectionHeading text={'Preferences'} />
      <div
        style={{
          padding: '5px 20px',
          background: 'rgba(33, 33, 33, 1)',
          margin: '10px 30px',
          borderRadius: '16px',
        }}
      >
        <div style={{ margin: '20px 0px' }}>
          <SettingDetail
            title={'Language'}
            subtitle={'Choose your preferred language'}
            cta={
              <IconButton
                height={'31px'}
                width={'172px'}
                btnText={'Change Password'}
                icon={images.lock}
              />
            }
          />
        </div>
        <div style={{ margin: '40px 0px 10px 0px' }}>
          <SettingDetail
            title={'Marketing Emails'}
            subtitle={'Receive emails about new features and updates'}
            cta={<ToggleSwitch />}
          />
        </div>
      </div>

      <div style={{ margin: '30px' }}>
        <PrimaryButton text={'Save Changes'} />
      </div>
    </div>
  );
};

export default Settings;
