import {
  tableStyles,
  headerStyles,
  rowStyles,
  cellStyles,
  firstCellStyles,
  lastCellStyles,
  tableTitle,
} from './style.css';

const Table = () => {
  const updates = [
    { title: 'Weekly Tech Update #1', date: '7 July 2024', time: '14:00' },
    { title: 'Weekly Tech Update #2', date: '10 May 2024', time: '15:00' },
    { title: 'Weekly Tech Update #3', date: '24 Dec. 2024', time: '16:00' },
  ];
  return (
    <div>
      <p className={tableTitle}>Upcoming Broadcasts</p>

      <table className={tableStyles}>
        <thead>
          <tr>
            <th className={headerStyles}>Title</th>
            <th className={headerStyles}>Date</th>
            <th className={headerStyles}>Time</th>
          </tr>
        </thead>
        <tbody>
          {updates.map((update, index) => (
            <tr key={index} className={rowStyles}>
              <td className={`${cellStyles} ${firstCellStyles}`}>{update.title}</td>
              <td className={cellStyles}>{update.date}</td>
              <td className={`${cellStyles} ${lastCellStyles}`}>{update.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
