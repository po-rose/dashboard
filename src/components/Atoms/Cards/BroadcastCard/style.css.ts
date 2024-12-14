import { style } from '@vanilla-extract/css';

export const card = style({
  background: 'rgba(43, 43, 43, 1)',
  height: '180px',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingLeft: '25px',
});

export const title = style({
  fontWeight: 600,
  fontSize: '20px',
  color: 'rgba(255, 255, 255, 1)',
});

export const value = style({
  fontWeight: 700,
  fontSize: '33px',
  color: 'white',
  marginTop: '10px',
});

export const subtitle = style({
  fontWeight: 400,
  fontSize: '15px',
  color: 'rgba(255, 255, 255, 0.6)',
  marginTop: '10px',
});
