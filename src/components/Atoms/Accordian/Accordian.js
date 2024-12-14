'use client';

import * as styles from './style.css';
import { images } from '@/config';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Accordian = ({ label, accordianBody }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          ...(!open ? { borderBottom: '1.5px solid rgba(255, 255, 255, 0.44)' } : {}),
          ...(!open ? { paddingBottom: '15px' } : {}),
        }}
      >
        <p style={{ fontSize: '18px', fontWeight: 600 }}>{label}</p>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        >
          <Image src={images.reactSelect} width={20} height={20} alt='down-arrow' />
        </motion.div>
      </div>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {accordianBody}
          </motion.div>
          <div
            style={{
              width: '100%',
              height: '1.5px',
              background: 'rgba(255, 255, 255, 0.44)',
              marginTop: '10px',
            }}
          ></div>
        </>
      )}
    </div>
  );
};

export default Accordian;
