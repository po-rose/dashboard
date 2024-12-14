'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { images } from '@/config';
import { popup, iconStyles, containerStyle } from './style.css';
import { CircleHelp } from 'lucide-react';

const HeadingInfo = ({
  iconSize,
  text,
  fontSize = '18px',
  fontWeight = 600,
  popupText,
  showIcon = true,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className={containerStyle}>
      <p style={{ fontSize, fontWeight }}>{text}</p>
      {showIcon && (
        <div
          className={iconStyles}
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
        >
          <CircleHelp size={15} />

          {showPopup && <div className={popup}>{popupText}</div>}
        </div>
      )}
    </div>
  );
};

export default HeadingInfo;
