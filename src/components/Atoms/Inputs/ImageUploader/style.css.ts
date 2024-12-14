import { style } from '@vanilla-extract/css';

export const card = style({
  backgroundColor: 'rgba(33, 33, 33, 1)',
  borderRadius: '16px',
  height: '300px',
  width: '300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '10px',
  position: 'relative',
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

export const cardTitle = style({
  position: 'absolute',
  top: 20,
  left: 20,
  fontSize: '14px',
  fontWeight: 400,
});
