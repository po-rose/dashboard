// components/Modal.js
import React from 'react';
import * as styles from './style.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackgroundClick}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
