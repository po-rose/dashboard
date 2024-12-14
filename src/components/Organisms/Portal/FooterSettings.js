import TextInput from '@/components/Atoms/Inputs/TextInput';
import SectionTitle from './SectionTitle';
import SaveChanges from '@/components/Molecules/SaveChanges';
import ThemeRadio from '@/components/Atoms/Inputs/ThemeRadio';
import LogoUpload from '@/components/Atoms/Inputs/LogoUpload';
import CustomSelect from '@/components/Atoms/Inputs/CustomSelect';

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
              label={'Portal Slogan'}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: 'rgba(33, 33, 33, 1)',
          paddingTop: '18px',
          paddingLeft: '18px',
          paddingRight: '18px',
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
            <CustomSelect backgroundColor={'#212121'} placeholder={'Facebook'} />
          </div>
          <div style={{ flex: '1' }}>
            <TextInput placeholder={'enter URL'} />
          </div>
          <div
            style={{
              backgroundColor: 'white',
              color: 'black',
              height: '32px',
              borderRadius: '6px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '126px',
              fontSize: '14px',
              marginTop: '20px',
            }}
          >
            Add
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
