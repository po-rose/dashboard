'use client';

import React, { useState } from 'react';
import * as styles from './style.css';

const FeedMonitor = ({  }) => {
 
  return (
    <div className={styles.container}>
        <p className={styles.sectionTitle}>Feed Monitor</p>
        <div className={styles.subContainer}>
            <div className={styles.playerStyle}>
                <p className={styles.textStyle}>Video Player</p>
            </div>
        </div>
    </div>
  );
};

export default FeedMonitor;
