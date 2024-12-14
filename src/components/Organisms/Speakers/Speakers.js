'use client';

import { useState } from 'react';
import SpeakerCard from '@/components/Atoms/Cards/SpeakerCard';
import { cardContainer, containerStyle, paginationStyle } from './style.css';
import Pagination from '@/components/Atoms/Pagination';
import SpeakerHeader from '@/components/Atoms/SpeakerHeader';
import { AddSpeakerModal } from '@/components/Molecules/Popups';

const Speakers = () => {
  const [selectedSpeakers, setSelectedSpeakers] = useState(Array(15).fill(false));

  const handleSelectAll = (isSelected) => {
    setSelectedSpeakers(Array(15).fill(isSelected));
  };

  const handleSelectSpeaker = (index, isSelected) => {
    const updatedSelections = [...selectedSpeakers];
    updatedSelections[index] = isSelected;
    setSelectedSpeakers(updatedSelections);
  };

  const isAllSelected = selectedSpeakers.every(Boolean);

  return (
    <div>
      <SpeakerHeader
        setSelectedAll={handleSelectAll}
        isAllSelected={isAllSelected}
      />
      <div className={containerStyle}>
        <div className={cardContainer}>
          {selectedSpeakers.map((selected, index) => (
            <SpeakerCard
              key={index}
              selected={selected}
              onSelect={(isSelected) => handleSelectSpeaker(index, isSelected)}
            />
          ))}
        </div>
        <div className={paginationStyle}>
          <Pagination label={'Speaker'} />
        </div>
      </div>
    </div>
  );
};

export default Speakers;
