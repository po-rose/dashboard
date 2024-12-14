import { style } from '@vanilla-extract/css';

export const paginationContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const pageNumber = style({
  fontSize: '16px',
  fontWeight: 400,
  color: 'white',
});

export const arrowBtn = style({
  height: '26px',
  width: '26px',
  borderRadius: '4px',
  backgroundColor: '#212121',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const select = style({
  position: 'relative',
  height: '36px',
  backgroundColor: '#212121', // Dark background color
  color: '#fff',
  borderRadius: '8px',
  padding: '0 10px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  marginLeft: '20px',
});

export const selectText = style({
  fontSize: '16px',
});

export const dropdownIcon = style({
  fontSize: '14px',
  marginLeft: '10px',
});
