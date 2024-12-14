import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '16px',
  width: '100%',
});

export const labelStyle = style({
  color: 'rgba(151, 151, 151, 1)',
  fontWeight: 400,
  fontSize: '12px',
});

export const required = style({
  color: 'red',
  marginLeft: '4px',
});

export const inputField = style({
  backgroundColor: 'rgba(43, 43, 43, 1)',
  marginTop: '10px',
  color: '#fff',
  height: '100%',
  padding: '12px 16px',
  borderRadius: '12px',
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
