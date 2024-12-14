'use client';
import { useState } from 'react';

import OptionSelector from '@/components/Atoms/Inputs/OptionSelector';
import TextInput from '@/components/Atoms/Inputs/TextInput';
import UploadComponent from '@/components/Atoms/Inputs/ImageUploader';
import DateInput from '@/components/Atoms/Inputs/DateInput';
import RichTextEditor from '@/components/Atoms/Inputs/LexicalRichEditor';
import CustomSelect from '@/components/Atoms/Inputs/CustomSelect';
import Accordian from '@/components/Atoms/Accordian';
import HeadingInfo from '@/components/Atoms/HeadingInfo';
import ToggleSwitch from '@/components/Atoms/Inputs/ToggleSwitch';
import UrlInput from '@/components/Atoms/Inputs/UrlInput';
import SecondsInput from '@/components/Atoms/Inputs/SecondsInput';
import TimePicker from '@/components/Atoms/Inputs/TimePicker';
import { container } from './style.css';
import SaveChanges from '@/components/Molecules/SaveChanges';
import { icon } from '@/components/layout/Navbar/style.css';

const AdvancedSettings = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(33, 33, 33, 1)',
        padding: '30px',
        marginTop: '10px',
        borderRadius: '16px',
      }}
    >
      <HeadingInfo
        iconSize={18}
        text={'Disable Speakers'}
        popupText={
          'Disabling this will only show chapters on players and overlay. This setting cannot be changed later for this broadcast.'
        }
      />
      <div style={{ marginTop: '15px' }}>
        <ToggleSwitch />
      </div>

      <div style={{ marginTop: '20px' }}>
        <UrlInput label={'URL Slug'} />
      </div>

      <SecondsInput label={'Live Panel Delay'} />
    </div>
  );
};

const ScheduleBroadcast = () => {
  const [description, setDescription] = useState('');
  return (
    <div className={container} style={{ padding: '40px 0' }}>
      <OptionSelector />
      <div style={{ marginTop: '20px' }}>
        <TextInput label='Title' placeholder='enter broadcast title' />
      </div>
      <div style={{ marginTop: '20px' }}>
        <RichTextEditor
          label='Description'
          value={description}
          onChange={setDescription}
          placeholder='enter broadcast description'
        />
      </div>

      <div
        style={{
          marginTop: '20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '16px',
        }}
      >
        <div style={{ gridColumn: 'span 4' }}>
          <DateInput label={'Start Date'} />
        </div>
        <div style={{ gridColumn: 'span 2' }}>
          <TimePicker label={'Time'} />
        </div>

        <div style={{ gridColumn: 'span 6' }}>
          <CustomSelect 
            label={'Visibility'} 
            options={[{value: 'public', label: 'Public'}, {value: 'private', label: 'Private'}]}
            defaultOption={{value: 'public', label: 'Public'}}
            isSearchable={false}
          />
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <UploadComponent label='Live & VOD' />
      </div>

      <div style={{ marginTop: '20px' }}>
        <Accordian label={'Advanced Settings'} accordianBody={<AdvancedSettings />} />
      </div>

      <div style={{ marginTop: '30px' }}>
        <SaveChanges
          headingText='Schedule Broadcast'
          // title='Schedule your broadcast'
          subtitle='Schedule a new broadcast for your portal'
          buttonText='Schedule'
        />
      </div>
    </div>
  );
};

export default ScheduleBroadcast;
