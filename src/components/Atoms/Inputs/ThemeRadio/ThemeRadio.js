'use client';
import * as styles from './style.css';
import Image from 'next/image';
import { images } from '@/config';
import { useState } from 'react';

const mockdata = [
  {
    icon: images.lightTheme,
    label: 'Light',
  },
  {
    icon: images.darkTheme,
    label: 'Dark',
  },
];

const Radio = ({ icon, label, selected, setSelectedTheme }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <label>{label}</label>
      <Image src={icon} width={200} height={200} alt='theme' />

      <div
        onClick={() => setSelectedTheme(label)}
        style={{
          height: '20px',
          width: '20px',
          borderRadius: '100px',
          border: '1px solid white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {selected && (
          <div
            style={{
              height: '10px',
              width: '10px',
              backgroundColor: 'white',
              borderRadius: '100px',
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

const ThemeRadio = () => {
  const [theme, setTheme] = useState('Dark');

  return (
    <div
      style={{
        backgroundColor: 'rgba(33, 33, 33, 1)',
        padding: '15px',
        borderRadius: '16px',
      }}
    >
      <p className={styles.sectionTitle}>Select Theme</p>
      <p className={styles.sectionSubTitle}>Choose a base theme for your portal</p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          columnGap: '150px',
        }}
      >
        {mockdata.map(({ icon, label }) => (
          <Radio selected={theme == label} setSelectedTheme={setTheme} label={label} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default ThemeRadio;
