import { style } from '@vanilla-extract/css';
export const cols3 = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px',
  marginTop: '10px',
});

export const cols4 = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '10px',
});
