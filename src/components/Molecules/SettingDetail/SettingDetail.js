const SettingDetail = ({ title, subtitle, cta }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ flex: '1' }}>
        <p style={{ fontSize: '16px', fontWeight: 400 }}>{title}</p>
        <p
          style={{
            fontSize: '14px',
            fontWeight: 400,
            color: 'rgba(151, 151, 151, 1)',
            whiteSpace: 'nowrap'
          }}
        >
          {subtitle}
        </p>
      </div>
      <div style={{ width: '200px' }}>{cta}</div>
    </div>
  );
};
export default SettingDetail;
