import { card, subtitle, title, value } from './style.css';

const BroadCastCard = ({ cardTitle, cardValue, cardSubtitle }) => {
  return (
    <div className={card}>
      <p className={title}>{cardTitle}</p>
      <p className={value}>{cardValue}</p>
      <p className={subtitle}>{cardSubtitle}</p>
    </div>
  );
};
export default BroadCastCard;
