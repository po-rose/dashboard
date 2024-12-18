'use client';
import React from 'react';
import * as styles from './style.css';

const TextInput = ({ label, placeholder, format='text', value }) => {
  return (
    <div className={styles.inputContainer}>
        <label className={styles.textStyle}>
         {label}
        </label>
        <input className={styles.inputField} type={format} placeholder={placeholder} defaultValue={value}/>
    </div>
  );
};

export default TextInput;
