import * as styles from './style.css';

const TabNavigation = ({ selected, onChange, tabs = ['Portal Identity', 'Typography', 'Footer Settings'] }) => {
  return (
    <div className={styles.navigator}>
      {tabs.map((text) => (
        <p
          key={text}
          className={selected === text ? styles.activeTab : styles.tab}
          onClick={() => onChange(text)}
        >
          {text}
        </p>
      ))}
    </div>
  );
};
export default TabNavigation;
