import { style } from '@vanilla-extract/css';

export const card = style({
  height: '133px',
  borderRadius: '8px',
  background: 'rgba(43, 43, 43, 1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingLeft: '25px',
});

export const cardTitle = style({
  fontWeight: 600,
  fontSize: '18px',
});

export const cardValue = style({
  fontWeight: 700,
  fontSize: '35px',
  marginTop: '10px',
});
