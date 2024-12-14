import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '16px',
});

export const labelStyle = style({
  color: 'rgba(151, 151, 151, 1)',
  fontWeight: 400,
  fontSize: '12px',
});

export const inputField = style({
  backgroundColor: 'rgba(43, 43, 43, 1)',
  color: '#fff',
  height: '100%',
  padding: '12px 16px',
  borderRadius: '0 12px 12px 0',
  border: 'none',
  outline: 'none',
  fontSize: '14px',
  width: '100%',
  boxSizing: 'border-box',
  '::placeholder': {
    color: '#555',
  },
  ':focus': {
    boxShadow: '0px 0px 4px rgba(255, 255, 255, 0.2)',
  },
});

export const flex = style({
  display: 'flex',
  alignItems: 'center',
  // columnGap: '10px',
  marginTop: '10px',
});

export const urlInput = style({
  backgroundColor: 'black',
  color: 'rgba(255, 255, 255, 0.66)',
  height: '100%',
  width: '200px',
  padding: '12px 16px',
  borderRadius: '12px 0 0 12px',
  border: 'none',
  outline: 'none',
  fontSize: '14px',

  boxSizing: 'border-box',
  '::placeholder': {
    color: '#555',
  },
  ':focus': {
    boxShadow: '0px 0px 4px rgba(255, 255, 255, 0.2)',
  },
});
