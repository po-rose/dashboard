'use client';
import React, { useState } from 'react';
import * as styles from './style.css';

const OptionSelector = () => {
  const [selected, setSelected] = useState('RTMP');

  return (
    <div>
      <div className={styles.optionContainer}>
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
            selected === 'Delay' ? styles.activeButton : styles.inactiveButton
          }`}
          onClick={() => setSelected('Delay')}
        >
          Delay
        </div>
        <div
          className={`${styles.optionButton} ${
            selected === 'Details' ? styles.activeButton : styles.inactiveButton
          }`}
          onClick={() => setSelected('Details')}
        >
          Details
        </div>
      </div>
    </div>
  );
};

export default OptionSelector;
