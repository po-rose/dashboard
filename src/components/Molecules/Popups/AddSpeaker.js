// components/AddSpeakerModal.js
import React from 'react';
import Modal from './Modal';
import * as styles from './style.css';
import ProfileImage from '@/components/Atoms/Inputs/ProfileImage';
import ProfilePictureEditor from '@/components/Atoms/ProfilePicture';
import { X } from 'lucide-react';

const AddSpeakerModal = ({ isOpen, onClose, mode = 'Add' }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.closeWrapper}>
        <button className={styles.closeButton} onClick={() => onClose(false)}>
          <X size={20} className={styles.closeIcon} />
        </button>
      </div>
      <h4 className={styles.title}>
        {mode} {mode == 'Add' && 'New'} Speaker
      </h4>
      <p className={styles.description}>
        {mode == 'Add' ? 'Add Speaker profile with their photo, name and title.' : 'Edit Speaker photo, name and title.'}
      </p>
      <ProfilePictureEditor mode={mode} />
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor='name' className={styles.label}>
            Name
          </label>
          <input
            id='name'
            type='text'
            placeholder='Type the name of the speaker'
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='title' className={styles.label}>
            Title
          </label>
          <input
            id='title'
            type='text'
            placeholder='e.g., Marketing Director'
            className={styles.input}
          />
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.buttonWrapper}>
            <button type='button' onClick={() => onClose(false)} className={styles.button}>
              Cancel
            </button>
            <button type='submit' className={styles.primaryButton}>
              {mode == 'Add' ? 'Create' : 'Update'}
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddSpeakerModal;
