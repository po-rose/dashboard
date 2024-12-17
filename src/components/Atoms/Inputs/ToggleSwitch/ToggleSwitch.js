import React from 'react';
import * as styles from './style.css';

const ToggleSwitch = ({ onChange, checked }) => {
  return (
    <label className={styles.switchContainer}>
      <input 
        type="checkbox" 
        onChange={onChange}
        checked={checked}
        className={styles.input}
      />
      <span className={styles.slider}></span>
    </label>
  );
};

export default ToggleSwitch;
