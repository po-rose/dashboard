import Image from 'next/image';
import * as styles from './style.css';

const IconButton = ({ height, width, color = 'black', bgColor = 'white', btnText, icon }) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color,
        height,
        width,
      }}
      className={styles.buttonStyles}
    >
      <Image src={icon} width={15} height={15} alt='btn-icon' />
      <span style={{ marginLeft: '10px', color }}>{btnText}</span>
    </div>
  );
};
export default IconButton;
