'use client';
import React, { useState } from 'react';
import * as styles from './style.css';

const OptionSelector = () => {
  const [selected, setSelected] = useState('RTMP');

  return (
    <div>
      <label className={styles.labelStyles}>
        Source
        {/* <span style={{ color: 'red' }}>*</span> */}
      </label>
      <div className={styles.container}>
        <div
          className={`${styles.optionButton} ${
            selected === 'RTMP' ? styles.activeButton : styles.inactiveButton
          }`}
          onClick={() => setSelected('RTMP')}
        >
          RTMP
        </div>
        <div
          className={`${styles.optionButton} ${
            selected === 'YouTube' ? styles.activeButton : styles.inactiveButton
          }`}
          onClick={() => setSelected('YouTube')}
        >
          YouTube
        </div>
      </div>
    </div>
  );
};

export default OptionSelector;
