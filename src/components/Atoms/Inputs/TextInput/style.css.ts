// inputStyles.css.ts
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const labelStyle = style({
  color: 'white',
  fontWeight: 600,
  fontSize: '18px',
});

export const required = style({
  color: 'red',
  marginLeft: '4px',
});

export const inputField = style({
  backgroundColor: 'rgba(43, 43, 43, 1)',
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

export const inputContainer = style({
  backgroundColor: 'rgba(33, 33, 33, 1)',
  borderRadius: '16px',
  marginTop: '15px',
  padding: '10px',
  height: '55px',
});

export const subtitleStyles = style({
  marginTop: '5px',
  fontSize: '12px',
  fontWeight: 400,
  color: 'rgba(151, 151, 151, 1)',
});
