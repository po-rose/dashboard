import * as styles from './style.css';

const SecondsInput = ({ label, required }) => {
  return (
    <div className={styles.container}>
      <label className={styles.labelStyle}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input value={20} style={{ width: '100px' }} className={styles.inputField} />
        <p
          style={{
            textAlign: 'center',
            fontSize: '10px',
            fontWeight: 400,
            marginLeft: '10px',
            marginTop: '5px',
          }}
        >
          seconds
        </p>
      </div>
    </div>
  );
};

export default SecondsInput;
