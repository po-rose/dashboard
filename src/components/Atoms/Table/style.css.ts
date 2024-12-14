import { style } from '@vanilla-extract/css';

export const tableTitle = style({
  fontWeight: 600,
  fontSize: '18px',
  color: 'rgba(255, 255, 255, 1)',
});

export const tableStyles = style({
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: '0 8px',
  color: '#ffffff',
  fontFamily: 'Arial, sans-serif',
  marginTop: '10px',
});

export const headerStyles = style({
  padding: '12px 16px',
  textAlign: 'left',
  backgroundColor: '#1e1e1e',
  fontWeight: 'bold',
});

export const rowStyles = style({
  backgroundColor: '#2a2a2a',
});

export const cellStyles = style({
  padding: '16px',
  borderTop: '1px solid #3a3a3a',
  borderBottom: '1px solid #3a3a3a',
});

export const firstCellStyles = style({
  borderLeft: '1px solid #3a3a3a',
  borderTopLeftRadius: '8px',
  borderBottomLeftRadius: '8px',
});

export const lastCellStyles = style({
  borderRight: '1px solid #3a3a3a',
  borderTopRightRadius: '8px',
  borderBottomRightRadius: '8px',
});
