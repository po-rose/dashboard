"use client";

import TextInput from '@/components/Atoms/Inputs/TextInput';
import SettingDetail from '@/components/Molecules/SettingDetail';
import IconButton from '@/components/Atoms/Button/IconButton';
import { images } from '@/config';
import ToggleSwitch from '@/components/Atoms/Inputs/ToggleSwitch';
import * as styles from './style.css';
import SaveChanges from "@/components/Molecules/SaveChanges";
import SectionTitle from './SectionTitle';
import LanguageSelect from '@/components/Atoms/Inputs/LanguageSelect';

const Settings = () => {
  return (
    <div className={styles.container}>
      {/* Name and company */}
      <SectionTitle text={'Personal Information'} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '16px',
          padding: '20px',
          columnGap: '10px',
          background: 'rgba(33, 33, 33, 1)',
        }}
      >
        <div style={{ width: '100%' }}>
          <TextInput label={'Name'} placeholder={'enter your name'} />
        </div>
        <div style={{ width: '100%' }}>
          <TextInput label={'Company'} placeholder={'enter your company'} />
        </div>
      </div>

      {/* Contact Information */}
      <SectionTitle text={'Contact Information'} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '16px',
          padding: '20px',
          columnGap: '10px',
          background: 'rgba(33, 33, 33, 1)',
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
      <SectionTitle text={'Security'} />
      <div
        style={{
          padding: '5px 20px',
          background: 'rgba(33, 33, 33, 1)',
          borderRadius: '16px',
        }}
      >
        <div style={{ margin: '20px 0px' }}>
          <SettingDetail
            title={'Password'}
            subtitle={'Last changed: 3 months ago'}
            cta={
                <IconButton
                  height={'31px'}
                  width={'172px'}
                  btnText={'Change Password'}
                />
            }
          />
        </div>
        <div style={{ margin: '40px 0px 10px 0px' }}>
          <SettingDetail
            title={'Two-Factor Authentication'}
            subtitle={'Current Status: Disabled'}
            cta={
              <IconButton
                height={'31px'}
                width={'139px'}
                bgColor='#2A2A2A'
                btnText={'Enable 2FA'}
                variant='secondary'
              />
            }
          />
        </div>
      </div>

      {/* Preference */}
      <SectionTitle text={'Preferences'} />
      <div
        style={{
          padding: '5px 20px',
          background: 'rgba(33, 33, 33, 1)',
          borderRadius: '16px',
        }}
      >
        <div style={{ margin: '20px 0px' }}>
          <SettingDetail
            title={'Language'}
            subtitle={'Choose your preferred language'}
            cta={
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                height: '40px'
              }}>
                <LanguageSelect
                  padding='20px 0px 0px 0px'
                  options={[
                    { value: 'english', label: 'English' },
                    { value: 'svenska', label: 'Svenska' },
                  ]}
                  defaultOption={{ value: 'english', label: 'English' }}
                  isSearchable={false}
                />
              </div>
            }
          />
        </div>
        <div style={{ margin: '0px 0px 20px 0px' }}>
          <SettingDetail
            title={'Marketing Emails'}
            subtitle={'Receive emails about new features and updates'}
            cta={
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <ToggleSwitch />
              </div>
            }
          />
        </div>
      </div>

      {/* Save Changes */}
      <div style={{ marginTop: '30px' }}>
        <div
          style={{
            width: '100%',
            height: '1.5px',
            background: 'rgba(255, 255, 255, 0.44)',
            marginBottom: '20px',
          }}
        ></div>
        <SaveChanges
          headingText="Schedule Broadcast"
          subtitle="Schedule a new broadcast for your portal"
          buttonText="Schedule"
        />
      </div>
    </div>
  );
};

export default Settings;
