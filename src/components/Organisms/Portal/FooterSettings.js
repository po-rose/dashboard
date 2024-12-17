import TextInput from '@/components/Atoms/Inputs/TextInput';
import SectionTitle from './SectionTitle';
import SaveChanges from '@/components/Molecules/SaveChanges';
import ThemeRadio from '@/components/Atoms/Inputs/ThemeRadio';
import LogoUpload from '@/components/Atoms/Inputs/LogoUpload';
import CustomSelect from '@/components/Atoms/Inputs/CustomSelect';
import * as styles from './style.css.ts';

const FooterSettings = () => {
  return (
    <div style={{ marginTop: '40px' }}>
      {/* Inputs */}
      <SectionTitle text={'Footer Settings'} />
      <div
        style={{
          backgroundColor: 'rgba(33, 33, 33, 1)',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '20px',
          borderRadius: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <div style={{ width: '100%' }}>
            <TextInput
              placeholder={'enter URL'}
              subtitle={'Link to the official website.'}
              label={'Official Website'}
            />
          </div>
          <div style={{ width: '100%' }}>
            <TextInput
              placeholder={'enter address'}
              subtitle={'Enter the physical address.'}
              label={'Address'}
            />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: '15px' }}>
          <div style={{ width: '100%' }}>
            <TextInput
              placeholder={'enter phone number'}
              subtitle={'Enter phone number for portal'}
              label={'Phone Number'}
            />
          </div>
          <div style={{ width: '100%' }}>
            <TextInput
              placeholder={'Email Address'}
              subtitle={'Enter email address for portal'}
              label={'Email Address'}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: 'rgba(33, 33, 33, 1)',
          padding: '20px',
          borderRadius: '16px',
          marginTop: '30px',
        }}
      >
        <p style={{ color: 'white', fontSize: '14px', fontWeight: 400 }}>Social Media</p>
        <p
          style={{
            color: 'rgba(151, 151, 151, 1)',
            fontSize: '12px',
            fontWeight: 400,
            marginTop: '5px',
            marginBottom: '25px',
          }}
        >
          Add links to your social media profiles
        </p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '140px' }}>
            <CustomSelect backgroundColor={'#181818'}
            padding="16px 0px 0px 0px"
            options={[
              { value: 'facebook', label: 'Facebook' },
              { value: 'instagram', label: 'Instagram' },
              { value: 'twitter', label: 'Twitter/X' },
              { value: 'linkedin', label: 'LinkedIn' },
            ]}
              defaultOption={{ value: 'facebook', label: 'Facebook' }}
              isSearchable={false}
            />
          </div>
          <div style={{ flex: '1' }}>
            <TextInput placeholder={'enter URL'} padding={'0px 10px 0px 10px'} />
          </div>
          <div className={styles.addButton}>
            +
          </div>
        </div>
      </div>

      {/* Save Changes */}
      <div style={{ margin: '30px 0px ' }}>
        <SaveChanges />
      </div>
    </div>
  );
};

export default FooterSettings;
