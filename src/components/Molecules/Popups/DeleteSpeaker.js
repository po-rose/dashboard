import React from 'react';
import Modal from './Modal';
import * as styles from './style.css';
import { X } from 'lucide-react';

const DeleteSpeakerModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.closeWrapper}>
        <button className={styles.closeButton} onClick={() => onClose(false)}>
          <X size={20} className={styles.closeIcon} />
        </button>
      </div>
      <h4 className={styles.title}>Delete Speaker</h4>
      <p className={styles.description}>
        Are you sure you want to delete this item? This action cannot be undone.
      </p>
      <form className={styles.form}>
        <div className={styles.deleteButtonGroup}>
          <div className={styles.buttonWrapper}>
            <button type='button' onClick={() => onClose(false)} className={styles.button}>
              Cancel
            </button>
            <button type='button' className={styles.dangerButton} onClick={() => {/* handle delete action */}}>
              Delete
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default DeleteSpeakerModal;
