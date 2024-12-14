'use client';

import { AddSpeakerModal } from '@/components/Molecules/Popups';
import { images } from '@/config';
import * as styles from './style.css';
import Image from 'next/image';
import SearchBar from '../SearchBox';
import Checkbox from '../Checkbox';
import { useState } from 'react';

const AddNew = ({ setIsOpen }) => {
  return (
    <div
      onClick={() => setIsOpen(true)}
      className={styles.addNewButton}
    >
      <Image src={images.plus} height={13} width={13} alt='plus' />
      <p style={{ fontSize: '13px', fontWeight: 600, marginLeft: '5px' }}>Add New Speaker</p>
    </div>
  );
};

const SpeakerHeader = ({ setSelectedAll, isAllSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectAll = (e) => {
    setSelectedAll(e.target.checked);
  };

  return (
    <div className={styles.container}>
      <AddSpeakerModal isOpen={isOpen} onClose={setIsOpen} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox checked={isAllSelected} onChange={handleSelectAll} />
        <p style={{ marginLeft: '10px', marginTop: '2px', fontSize: '16px', fontWeight: 500 }}>Select All</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <SearchBar backgroundColor='#181818' />
        <AddNew setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default SpeakerHeader;
