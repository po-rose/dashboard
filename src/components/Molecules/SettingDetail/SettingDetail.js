const SettingDetail = ({ title, subtitle, cta }) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      width: '100%',
      minHeight: '48px'
    }}>
      <div style={{ 
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <p style={{ 
          fontSize: '16px', 
          fontWeight: 400,
          margin: '0'
        }}>{title}</p>
        <p style={{
          fontSize: '14px',
          fontWeight: 400,
          color: 'rgba(151, 151, 151, 1)',
          whiteSpace: 'nowrap',
          margin: '4px 0 0 0'
        }}>
          {subtitle}
        </p>
      </div>
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        minWidth: '200px',
        paddingRight: '20px'
      }}>
        {cta}
      </div>
    </div>
  );
};
export default SettingDetail;
