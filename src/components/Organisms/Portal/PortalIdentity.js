import TextInput from '@/components/Atoms/Inputs/TextInput';
import SectionTitle from './SectionTitle';
import SaveChanges from '@/components/Molecules/SaveChanges';
import ThemeRadio from '@/components/Atoms/Inputs/ThemeRadio';
import LogoUpload from '@/components/Atoms/Inputs/LogoUpload';

const PortalIdentity = () => {
  return (
    <div style={{ marginTop: '40px' }}>
      {/* Inputs */}
      <SectionTitle text={'Portal Identity'} />
      <div
        style={{
          backgroundColor: 'rgba(33, 33, 33, 1)',
          display: 'flex',
          alignItems: 'center',
          padding: '20px',
          borderRadius: '16px',
        }}
      >
        <div style={{ width: '100%' }}>
          <TextInput
            placeholder={'enter the portal title.'}
            subtitle={'Set the title of your portal.'}
            label={'Portal Title'}
          />
        </div>
        <div style={{ width: '100%' }}>
          <TextInput
            placeholder={'enter the portal slogan.'}
            subtitle={'Set the slogan of your portal.'}
            label={'Portal Slogan'}
          />
        </div>
      </div>

      {/* Theme Selection */}
      <SectionTitle text={'Theme Selection'} />
      <ThemeRadio />

      <SectionTitle text={'Logo & Favicon'} />
      <LogoUpload />

      {/* Save Changes */}
      <div style={{ margin: '30px 0px ' }}>
        <SaveChanges />
      </div>
    </div>
  );
};

export default PortalIdentity;
