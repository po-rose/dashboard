import TextInput from '@/components/Atoms/Inputs/TextInput';
import SectionTitle from './SectionTitle';
import SaveChanges from '@/components/Molecules/SaveChanges';
import ThemeRadio from '@/components/Atoms/Inputs/ThemeRadio';
import LogoUpload from '@/components/Atoms/Inputs/LogoUpload';
import CustomSelect from '@/components/Atoms/Inputs/CustomSelect';

const Typography = () => {
  return (
    <div style={{ marginTop: '40px' }}>
      {/* Inputs */}
      <SectionTitle text={'Typography'} />

      <div
        style={{
          backgroundColor: 'rgba(33, 33, 33, 1)',
          paddingTop: '18px',
          paddingLeft: '18px',
          paddingRight: '18px',
          borderRadius: '16px',
        }}
      >
        <p style={{ color: 'white', fontSize: '14px', fontWeight: 400 }}>Font Selection</p>
        <p
          style={{
            color: 'rgba(151, 151, 151, 1)',
            fontSize: '12px',
            fontWeight: 400,
            marginTop: '5px',
            marginBottom: '25px',
          }}
        >
          Choose fonts for headings and body text
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            columnGap: '20px',
            paddingBottom: '20px',
          }}
        >
          <div style={{ width: '100%' }}>
            <CustomSelect label={'Heading Font(H1, H2, H3)'} />
            <div
              style={{
                width: '95%',
                height: '100px',
                borderRadius: '12px',
                background: 'rgba(43, 43, 43, 1)',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '20px',
                color: 'rgba(255, 255, 255, 0.88)',
                fontSize: '40px',
                fontWeight: 600,
              }}
            >
              <p>Font Preview</p>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <CustomSelect label={'Body Text Font'} />
            <div
              style={{
                width: '95%',
                height: '100px',
                borderRadius: '12px',
                background: 'rgba(43, 43, 43, 1)',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '20px',
                color: 'rgba(255, 255, 255, 0.88)',
                fontSize: '40px',
                fontWeight: 600,
              }}
            >
              <p>Font Preview</p>
            </div>
          </div>
        </div>
      </div>

      {/* Theme Selection */}

      {/* Save Changes */}
      <div style={{ margin: '30px 0px ' }}>
        <SaveChanges />
      </div>
    </div>
  );
};

export default Typography;
