import { style } from '@vanilla-extract/css';

export const card = style({
  background: 'rgba(43, 43, 43, 1)',
  borderRadius: '8px',
  height: '178.2px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingLeft: '15px',
  paddingRight: '15px',
});

export const progressBarStyle = style({
  width: '100%',
  height: '8px',
  backgroundColor: '#222',
  borderRadius: '4px',
  position: 'relative',
  marginTop: '10px',
});

export const fillStyle = style({
  height: '100%',
  borderRadius: '4px',
  transition: 'width 0.3s ease-in-out',
});
