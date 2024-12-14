import * as styles from './style.css';

const UrlInput = ({ label, required }) => {
  return (
    <div className={styles.container}>
      <label className={styles.labelStyle}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>

      <div className={styles.flex}>
        <input className={styles.urlInput} value={'your.domain.se/b/'} disabled />
        <input className={styles.inputField} placeholder='enter broadcast URL' />
      </div>
    </div>
  );
};
export default UrlInput;
