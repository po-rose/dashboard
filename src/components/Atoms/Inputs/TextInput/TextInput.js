'use client';
import React from 'react';
import * as styles from './style.css';

const TextInput = ({ label, placeholder, required = false, subtitle }) => {
  return (
    <div className={styles.container}>
      <label className={styles.labelStyle}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>

      {subtitle && <p className={styles.subtitleStyles}>{subtitle}</p>}

      <div className={styles.inputContainer}>
        <input className={styles.inputField} type='text' placeholder={placeholder} />
      </div>
    </div>
  );
};

export default TextInput;
