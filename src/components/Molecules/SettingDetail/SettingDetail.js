const SettingDetail = ({ title, subtitle, cta }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <p style={{ fontSize: '16px', fontWeight: 400 }}>{title}</p>
        <p
          style={{
            fontSize: '14px',
            fontWeight: 400,
            color: 'rgba(151, 151, 151, 1)',
            marginTop: '5px',
          }}
        >
          {subtitle}
        </p>
      </div>
      {cta}
    </div>
  );
};
export default SettingDetail;
