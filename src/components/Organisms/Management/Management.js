'use client';

import { useState, useEffect } from 'react';
import Pagination from '@/components/Atoms/Pagination';
import * as styles from './style.css';
import StreamList from '@/components/Molecules/StreamList';
import SearchBar from '@/components/Atoms/SearchBox';
import StreamManagementHeader from '@/components/Molecules/StreamMangementHeader';
import CustomSelect from '@/components/Atoms/Inputs/CustomSelect';
import { motion, AnimatePresence } from 'framer-motion';

const Management = () => {
  const [selectedBroadcasts, setSelectedBroadcasts] = useState(new Set());
  const [hasShownAnimation, setHasShownAnimation] = useState(false);

  const getAllBroadcastIds = () => {
    return [
      ...mockData.live.map(item => item.id),
      ...mockData.upcoming.map(item => item.id),
      ...mockData.previous.map(item => item.id)
    ];
  };

  const handleSelectAll = (isSelected) => {
    if (isSelected) {
      setSelectedBroadcasts(new Set(getAllBroadcastIds()));
    } else {
      setSelectedBroadcasts(new Set());
      setHasShownAnimation(false);
    }
  };

  const isAllSelected = () => {
    const allIds = getAllBroadcastIds();
    return allIds.length > 0 && allIds.every(id => selectedBroadcasts.has(id));
  };

  const handleBroadcastSelect = (id, isSelected) => {
    const newSelected = new Set(selectedBroadcasts);
    if (isSelected) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    
    if (newSelected.size === 0) {
      setHasShownAnimation(false);
    }
    
    setSelectedBroadcasts(newSelected);
  };

  const HeaderContent = () => {
    const shouldAnimate = !hasShownAnimation && selectedBroadcasts.size > 0;
    
    useEffect(() => {
      if (selectedBroadcasts.size > 0) {
        setHasShownAnimation(true);
      }
    }, [selectedBroadcasts.size]);

    return (
      <AnimatePresence>
        {selectedBroadcasts.size > 0 ? (
          <motion.div
            style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}
            initial={shouldAnimate ? { opacity: 0, y: -20 } : false}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : false}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <p style={{ 
              color: 'white', 
              fontSize: '20px',
              marginRight: '0px'
            }}>
              {selectedBroadcasts.size} Selected
            </p>
            <div style={{ width: '200px', height: '40px' }}>
              <CustomSelect 
                wrapper={false}
                padding="10px"
                backgroundColor="#212121"
                placeholder="Visibility Options"
                options={[
                  { value: "public", label: "Public" },
                  { value: "private", label: "Private" },
                ]}
                defaultOption={{ value: "public", label: "Public" }}
                isSearchable={false}
                customStyles={{
                  control: {
                    paddingRight: '10px'
                  },
                  menu: {
                    backgroundColor: '#212121',
                    overflow: 'hidden'
                  },
                  menuList: {
                    backgroundColor: '#212121'
                  },
                  option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isSelected || state.isFocused ? '#181818' : '#212121',
                    '&:hover': {
                      backgroundColor: '#181818'
                    }
                  })
                }}
              />
            </div>
            <button
              style={{
                backgroundColor: 'white',
                color: 'black',
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                height: '40px',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#212121';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = 'black';
              }}
            >
              Apply Changes
            </button>
            <button
              style={{
                backgroundColor: '#DC2626',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                height: '40px',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#FF4C4C'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#DC2626'}
            >
              Delete Permanently
            </button>
          </motion.div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Select broadcast to show quick options
          </motion.p>
        )}
      </AnimatePresence>
    );
  };

  const mockData = {
    live: [
      {
        id: '1',
        thumbnail: '',
        type: 'RTMP',
        visibility: 'Public',
        time: '12:00',
        date: '20 June 2024',
        mode: 'LIVE',
      },
    ],
    upcoming: [
      {
        id: '2',
        thumbnail: '',
        type: 'RTMP',
        visibility: 'Private',
        time: '18:00',
        date: '20 Aug. 2024',
        mode: 'Scheduled',
      },
      {
        id: '3',
        thumbnail: '',
        type: 'YouTube',
        visibility: 'Public',
        time: '23:30',
        date: '20 Mar. 2024',
        mode: 'Scheduled',
      },
    ],
    previous: [
      {
        id: '4',
        thumbnail: '',
        type: 'RTMP',
        visibility: 'Private',
        time: '11:00',
        date: '20 Aug. 2024',
        mode: 'VOD',
      },
      {
        id: '5',
        thumbnail: '',
        type: 'RTMP',
        visibility: 'Private',
        time: '10:00',
        date: '20 Aug. 2024',
        mode: 'VOD',
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0px 20px 20px 20px',
        }}
      >
        <HeaderContent />
        <SearchBar />
      </div>

      <StreamManagementHeader 
        onSelectAll={handleSelectAll}
        isAllSelected={isAllSelected()}
      />
      <StreamList 
        title='Live' 
        items={mockData.live} 
        onSelect={handleBroadcastSelect}
        selectedItems={selectedBroadcasts}
      />
      <StreamList 
        title='Upcoming' 
        items={mockData.upcoming} 
        onSelect={handleBroadcastSelect}
        selectedItems={selectedBroadcasts}
      />
      <StreamList 
        title='Previous' 
        items={mockData.previous} 
        onSelect={handleBroadcastSelect}
        selectedItems={selectedBroadcasts}
      />

      <div style={{ padding: '20px' }}>
        <Pagination label={'Broadcasts'} />
      </div>
    </div>
  );
};

export default Management;
