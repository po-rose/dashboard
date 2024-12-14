import Checkbox from '@/components/Atoms/Checkbox';
import * as styles from './style.css';

const StreamManagementHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <div style={{ width: '300px', display: 'flex', alignItems: 'center' }}>
        <div>
          {/* <input type='checkbox' /> */}
          <Checkbox />
        </div>
        <div style={{ marginLeft: '10px', fontSize: '16px', marginLeft: '10px' }}>Broadcast</div>
      </div>
      <div className={styles.header}>
        <div className={styles.Span2}>Type</div>
        <div className={styles.Span2}>Visibility</div>
        <div className={styles.Span2}>Date</div>
        <div className={styles.Span2}>Manage</div>
        <div className={styles.Span2}>Editor</div>
        <div className={styles.Span2}>Watch</div>
      </div>
    </div>
  );
};

export default StreamManagementHeader;
