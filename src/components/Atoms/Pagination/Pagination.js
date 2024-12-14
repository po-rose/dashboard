'use client';
import { useState } from 'react';

import {
  paginationContainer,
  pageNumber,
  arrowBtn,
  select,
  selectText,
  dropdownIcon,
} from './style.css';
import { images } from '@/config';
import Image from 'next/image';

const ArrowButton = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '80px' }}>
      <div className={arrowBtn}>
        <Image src={images.leftArrow} height={18} width={18} alt='arrow-btn' />
      </div>
      <div style={{ marginLeft: '10px' }} className={arrowBtn}>
        <Image src={images.rightArrow} height={14} width={14} alt='arrow-btn' />
      </div>
    </div>
  );
};

const SpeakerPerPage = ({ label }) => {
  const [selectedValue, setSelectedValue] = useState(15);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <p>{label} Per Page</p>
      <div className={select}>
        <span className={selectText}>{selectedValue}</span>
        <span className={dropdownIcon}>▼</span>
      </div>
    </div>
  );
};

const Pagination = ({ label }) => {
  return (
    <div className={paginationContainer}>
      <p className={pageNumber}>1-15</p>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <SpeakerPerPage label={label} />
        <ArrowButton />
      </div>
    </div>
  );
};

export default Pagination;
