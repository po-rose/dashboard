'use client';

import React, { useState } from 'react';
import SaveChanges from '@/components/Molecules/SaveChanges';
import CustomSelect from '@/components/Atoms/Inputs/CustomSelect';
import SectionTitle from './SectionTitle';
import * as styles from './style.css';

const LiveOverlay = () => {
  const [selectedStyle, setSelectedStyle] = useState({
    container: styles.style1,
    speakerInfo: styles.speakerInfo1,
    content: styles.content1
  });

  const handleStyleChange = (option) => {
    switch (option.value) {
      case 'style1':
        setSelectedStyle({
          container: styles.style1,
          speakerInfo: styles.speakerInfo1,
          content: styles.content1
        });
        break;
      case 'style2':
        setSelectedStyle({
          container: styles.style2,
          speakerInfo: styles.speakerInfo2,
          content: styles.content2
        });
        break;
      case 'style3':
        setSelectedStyle({
          container: styles.style3,
          speakerInfo: styles.speakerInfo3,
          content: styles.content3
        });
        break;
      case 'style4':
        setSelectedStyle({
          container: styles.style4,
          speakerInfo: styles.speakerInfo4,
          content: styles.content4
        });
        break;
      default:
        setSelectedStyle({
          container: styles.style1,
          speakerInfo: styles.speakerInfo1,
          content: styles.content1
        });
    }
  };

  return (
    <div className={styles.container}>
      {/* Style Selection */}
      <div
        style={{
          backgroundColor: 'rgba(33, 33, 33, 1)',
          padding: '20px',
          borderRadius: '16px',
          marginTop: '40px'
        }}
      >
        <p style={{ color: 'white', fontSize: '14px', fontWeight: 400 }}>Style Selection</p>
        <p
          style={{
            color: 'rgba(151, 151, 151, 1)',
            fontSize: '12px',
            fontWeight: 400,
            marginTop: '5px',
          }}
        >
          Choose style for optional live overlay
        </p>
        
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            columnGap: '20px',
          }}
        >
          <div style={{ width: '100%' }}>
            <CustomSelect  
              padding="0px 0px 0px 0px"
              options={[
                { value: 'style1', label: 'Style 1' },
                { value: 'style2', label: 'Style 2' },
                { value: 'style3', label: 'Style 3' },
                { value: 'style4', label: 'Style 4' },
              ]}
              defaultOption={{ value: 'style1', label: 'Style 1' }}
              isSearchable={false}
              onChange={handleStyleChange}
            />
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <SectionTitle text={'Preview'} />
      <div style={{
        backgroundColor: 'rgba(33, 33, 33, 1)',
        padding: '20px',
        borderRadius: '16px',
      }}>
        <p style={{ color: 'white', fontSize: '14px', fontWeight: 400 }}>With Speaker</p>
        
        {/* With Speaker */}
        <div className={selectedStyle.container}>
          <div className={selectedStyle.speakerInfo}>
            <p style={{ margin: 0 }}>Andreas Karlsson</p>
            <p style={{ margin: 0, fontSize: '12px', fontWeight: 'normal' }}>CEO</p>
          </div>
          <div className={selectedStyle.content}>
            Lorem Ipsum is simply dummy text of the printing...
          </div>
        </div>

        {/* Without Speaker */}
        <p style={{ color: 'white', fontSize: '14px', fontWeight: 400, paddingTop: '20px' }}>Without Speaker</p>
        <div className={selectedStyle.container}>
          <div className={selectedStyle.content}>
            Lorem Ipsum is simply dummy text of the printing...
          </div>
        </div>
      </div>

      {/* Save Changes */}
      <div style={{ margin: '30px 0px' }}>
        <SaveChanges />
      </div>
    </div>
  );
};

export default LiveOverlay;
