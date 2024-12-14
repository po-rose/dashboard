import { card, cardTitle, cardValue } from './style.css';

const ViewersCard = () => {
  return (
    <div className={card}>
      <p className={cardTitle}>Total Viewers (Last 30 Days)</p>
      <p className={cardValue}> 24,567</p>
    </div>
  );
};

export default ViewersCard;
