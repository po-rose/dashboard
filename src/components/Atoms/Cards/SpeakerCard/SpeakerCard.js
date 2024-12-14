import { AddSpeakerModal, DeleteSpeakerModal } from '@/components/Molecules/Popups';
import Checkbox from '../../Checkbox';
import { UserRound, Pencil, X } from 'lucide-react';
import { useState } from 'react';
import * as styles from './style.css';

const SpeakerCard = ({ selected, onSelect }) => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleCheckboxChange = (e) => {
    onSelect(e.target.checked);
  };

  return (
    <div className={styles.speakerCard}>
      <div className={styles.checkBox}>
        <Checkbox checked={selected} onChange={handleCheckboxChange} />
      </div>

      <div className={styles.avatar}>
        <UserRound color='black' size={50} />
      </div>
      <p className={styles.speakerTitle}>Speaker Name</p>
      <p className={styles.speakerName}>Insert your title here</p>
      <div className={styles.buttonContainer}>
        <div
          className={`${styles.buttonStyles} ${styles.editButton}`}
          onClick={() => setIsAddOpen(true)}
        >
          <Pencil size={20} color='black' />
        </div>
        <div
          className={`${styles.buttonStyles} ${styles.deleteButton}`}
          onClick={() => setIsDeleteOpen(true)}
        >
          <X color='white' size={20} />
        </div>
      </div>

      <AddSpeakerModal isOpen={isAddOpen} onClose={setIsAddOpen} mode={'Edit'} />
      <DeleteSpeakerModal isOpen={isDeleteOpen} onClose={setIsDeleteOpen} />
    </div>
  );
};
export default SpeakerCard;
