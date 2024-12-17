'use client';

import { AddSpeakerModal } from '@/components/Molecules/Popups';
import { images } from '@/config';
import * as styles from './style.css';
import Image from 'next/image';
import SearchBar from '../SearchBox';
import Checkbox from '../Checkbox';
import { useState } from 'react';
import { Plus } from 'lucide-react';

const AddNew = ({ setIsOpen }) => {
  return (
    <div
      onClick={() => setIsOpen(true)}
      className={styles.addNewButton}
    >
      <Plus size={13} className={styles.plusIcon} strokeWidth={2.5} />
      <p style={{ fontSize: '13px', fontWeight: '500', marginLeft: '5px', color: 'inherit' }}>Add New Speaker</p>
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
