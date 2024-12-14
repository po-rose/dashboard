const SaveChanges = ({
  title,
  buttonText = 'Save Changes',
  headingText = 'Save Changes',
  subtitle = 'Save your branding and appearance settings.',
}) => {
  return (
    <div>
      {title && <p style={{ fontSize: '18px', fontWeight: 600 }}>{title}</p>}
      <div
        style={{
          marginTop: '15px',
          backgroundColor: 'rgba(33, 33, 33, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: '16px',
          height: '68px',
          padding: '0px 20px',
        }}
      >
        <div>
          <p style={{ fontSize: '16px', fontWeight: 400 }}>{headingText}</p>
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
          }}
        >
          {buttonText}
        </div>
      </div>
    </div>
  );
};

export default SaveChanges;
