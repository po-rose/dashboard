import { style } from '@vanilla-extract/css';

export const navigator = style({
  width: '625px',
  height: '55.45px',
  border: '2px solid rgba(133, 133, 133, 0.33)',
  borderRadius: '33px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
});

export const tab = style({
  color: 'rgba(255, 255, 255, 0.44)',
  fontSize: '18px',
  fontWeight: 400,
  cursor: 'pointer',
  ':hover': {
    color: 'white',
  },
});

export const activeTab = style({
  fontSize: '18px',
  fontWeight: 700,
  color: 'rgba(255, 255, 255, 1)',
});
