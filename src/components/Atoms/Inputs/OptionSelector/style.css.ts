import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: 'rgba(33, 33, 33, 1)',
  padding: '15px',
  borderRadius: '16px',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '10px',
  height: '55px',
  marginTop: '15px',
});

export const optionButton = style({
  cursor: 'pointer',
  borderRadius: '8px',
  fontWeight: '400',
  transition: 'background-color 0.2s ease',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '18px',
});

export const activeButton = style({
  backgroundColor: '#fff',
  color: '#000',
});

export const inactiveButton = style({
  backgroundColor: 'rgba(43, 43, 43, 1)',
  color: '#ccc',
});

export const labelStyles = style({
  color: 'white',
  fontWeight: 600,
  fontSize: '18px',
});
