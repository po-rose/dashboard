'use client';

import React, { useState } from 'react';
import * as styles from './style.css';

const Checkbox = ({ size = '15px', checked, onChange }) => {
  // using internal state to manage the checkbox state 
  // when the parent component does not provide the checked prop
  // this is useful when the checkbox is used in a controlled component
  // its just temporary...
  const [internalChecked, setInternalChecked] = useState(false);

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    } else {
      setInternalChecked(e.target.checked);
    }
  };

  const isChecked = checked !== undefined ? checked : internalChecked;

  return (
    <label
      style={{ width: size, height: size }}
      className={`${styles.checkboxContainer} ${isChecked ? styles.checkboxChecked : ''}`}
    >
      <input
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
        className={styles.hiddenCheckbox}
      />
      <span className={`${styles.tickMark} ${isChecked ? styles.tickVisible : ''}`} />
    </label>
  );
};

export default Checkbox;
