'use client';

import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import * as styles from './style.css';

const SpeakerSystem = ({  }) => {
  
  return (
    <div className={styles.container}>
        <p className={styles.sectionTitle}>Speaker</p>
        <div className={styles.subContainer}>
          <p className={styles.subTitle}>Active Speaker</p>
          <div className={styles.nameStyle}>
            <p className={styles.textStyle}>Speaker Name</p>
            <X color='black' size={20} />
          </div>
          <div className={styles.searchStyle}>
            <Search color='white' size={20} />
            <p className={styles.textStyle}>Add Speaker</p>
          </div>
          <div className={styles.buttonStyle}>Publish</div>
        </div>
    </div>
  );
};

export default SpeakerSystem;
