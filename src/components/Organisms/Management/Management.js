import Pagination from '@/components/Atoms/Pagination';
import * as styles from './style.css';
import StreamList from '@/components/Molecules/StreamList';
import SearchBar from '@/components/Atoms/SearchBox';

import StreamManagementHeader from '@/components/Molecules/StreamMangementHeader';

const Management = () => {
  const mockData = {
    live: [
      {
        id: '1',
        thumbnail: '',
        type: 'RTMP',
        visibility: 'Public',
        time: '12:00',
        date: '20 June 2024',
        mode: 'LIVE',
      },
    ],
    upcoming: [
      {
        id: '1',
        thumbnail: '',
        type: 'RTMP',
        visibility: 'Private',
        time: '18:00',
        date: '20 Aug. 2024',
        mode: 'Scheduled',
      },
      {
        id: '2',
        thumbnail: '',
        type: 'YouTube',
        visibility: 'Public',
        time: '23:30',
        date: '20 Mar. 2024',
        mode: 'Scheduled',
      },
    ],
    previous: [
      {
        id: '1',
        thumbnail: '',
        type: 'RTMP',
        visibility: 'Private',
        time: '11:00',
        date: '20 Aug. 2024',
        mode: 'VOD',
      },
      {
        id: '2',
        thumbnail: '',
        type: 'RTMP',
        visibility: 'Private',
        time: '10:00',
        date: '20 Aug. 2024',
        mode: 'VOD',
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0px 20px 20px 20px',
        }}
      >
        <p>Select broadcast to show quick options</p>
        <SearchBar />
      </div>

      <StreamManagementHeader />
      <StreamList title='Live' items={mockData.live} />
      <StreamList title='Upcoming' items={mockData.upcoming} />
      <StreamList title='Previous' items={mockData.previous} />

      <div style={{ padding: '20px' }}>
        <Pagination label={'Broadcasts'} />
      </div>
    </div>
  );
};

export default Management;
