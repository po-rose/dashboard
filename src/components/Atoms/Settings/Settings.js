'use client';

import React, { useState } from 'react';
import * as styles from './style.css';
import OptionSelector from './OptionSelector';
import TextInput from './TextInput';
const Settings = ({  }) => {
 
  return (
    <div className={styles.container}>
        <p className={styles.sectionTitle}>Settings</p>
        <div className={styles.subContainer}>
          <OptionSelector />
          <div className={styles.rowContainer}>
            <div className={styles.buttonStyle}>Single OK</div>
            <p className={styles.statusStyle}>Stream Health is Good</p>
          </div>      
          
          <TextInput label='Stream URL' placeholder='enter stream url' value='rtmp://exmaple.com/live'/>
          <TextInput label='Stream Key' placeholder='enter stream key' format='password' value='enter stream key'/>
        </div>
    </div>
  );
};

export default Settings;
