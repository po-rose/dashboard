import * as styles from './style.css';

const TabNavigation = ({ selected, onChange }) => {
  return (
    <div className={styles.navigator}>
      {['Portal Identity', 'Typography', 'Footer Settings'].map((text) => (
        <p
          className={selected == text ? styles.activeTab : styles.tab}
          onClick={() => onChange(text)}
        >
          {text}
        </p>
      ))}
    </div>
  );
};
export default TabNavigation;
