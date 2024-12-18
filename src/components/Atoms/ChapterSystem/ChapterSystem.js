'use client';

import React, { useState } from 'react';
import { Edit2, Trash2, Plus } from 'lucide-react';
import * as styles from './style.css';

const ChapterSystem = ({  }) => {
  
  return (
    <div className={styles.container}>
      <div className={styles.rowStyle}>
        <p className={styles.sectionTitle}>Chapters</p>
        <div className={styles.addButtonStyle}>
          <Plus color='black' size={20}/>
          <p className={styles.addButtonText}>Add Chapter</p>
        </div>
      </div>
      <div className={styles.subContainer}>
        <div className={styles.buttonRowStyle}>
          <div className={styles.publishButtonStyle}>Publish</div>
          <div className={styles.clearButtonStyle}>Clear</div>
        </div>  
        <div>
          {Array.from({ length:13 }).map((_, index) => (
            <div key={index}>
              <div className={styles.rowStyle}>
                <div>Chapter 1:Introduction</div>
                <div className={styles.actionStyle}>
                  <Edit2 className={styles.buttonStyle} />
                  <Trash2 className={styles.buttonStyle}/>
                </div>
              </div>
              {index<12 && <hr className={styles.lineStyle}></hr>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterSystem;
