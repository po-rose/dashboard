import svg from '@/config/svg';
import * as styles from './style.css';
import { ChartNoAxesGantt, TvMinimalPlay } from 'lucide-react';
import { Clapperboard } from 'lucide-react';
import Image from 'next/image';
import Checkbox from '@/components/Atoms/Checkbox';
import Link from 'next/link';

const StreamRow = ({ item, onSelect, selectedItems }) => {
  const handleCheckboxChange = (e) => {
    onSelect(item.id, e.target.checked);
  };

  return (
    <div className={styles.rowContainer}>
      <div style={{ width: '300px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 1 }}>
          <Checkbox 
            onChange={handleCheckboxChange}
            checked={selectedItems.has(item.id)}
          />
        </div>

        <div
          style={{
            marginLeft: '26px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Image src={svg.dummyImg} height={122} width={122} />
          <div style={{ marginLeft: '10px' }}>
            <p style={{ fontSize: '14px' }}>Test</p>
            <p style={{ color: 'rgba(181, 181, 181, 1)', fontSize: '12px', marginTop: '2px' }}>
              dummytext{' '}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.Span2}>{item?.type}</div>
        <div className={styles.Span2}>{item?.visibility}</div>
        <div className={styles.Span2}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ color: '#90907E', margin: 0 }}>{item?.time}</p>
            <p style={{ margin: 0 }}>{item?.date}</p>
            <p
              style={{
                color: item?.mode === 'LIVE' ? 'rgba(220, 38, 38, 1)' : '#90907E',
                marginTop: '2px',
              }}
            >
              {item?.mode}
            </p>
          </div></div>
        <div className={styles.IconSpan2}>
          <Link href='/manage'>
            <ChartNoAxesGantt/>
          </Link>
        </div>
        <div className={styles.IconSpan2}>
          <Clapperboard />
        </div>
        <div className={styles.IconSpan2}>
          <TvMinimalPlay />
        </div>
      </div>
    </div>
  );
};

export default StreamRow;
