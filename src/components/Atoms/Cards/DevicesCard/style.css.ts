import { style } from '@vanilla-extract/css';

export const card = style({
  height: '133px',
  borderRadius: '8px',
  background: 'rgba(43, 43, 43, 1)',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingLeft: '25px',
  paddingRight: '20px',
});

export const cardTitle = style({
  fontWeight: 600,
  fontSize: '16px',
});

export const percentageStyle = style({
  fontWeight: 700,
  fontSize: '20px',
});

export const deviceStyle = style({
  color: 'rgba(255, 255, 255, 0.6)',
  fontSize: '14px',
  fontWeight: 400,
  marginTop: '5px',
});
