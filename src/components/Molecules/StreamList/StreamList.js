import StreamRow from '../StreamRow';
import * as styles from './style.css';

const StreamList = ({ title, items, onSelect, selectedItems }) => {
  return (
    <section>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div style={{ border: '0.1px solid rgba(255, 255, 255, 0.44)' }}></div>
      {items?.map((item) => (
        <StreamRow 
          key={item.id} 
          item={item} 
          onSelect={onSelect}
          selectedItems={selectedItems}
        />
      ))}
    </section>
  );
};

export default StreamList;
