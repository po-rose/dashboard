import { style } from '@vanilla-extract/css';

export const cols2 = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '30px',
});

export const cols3 = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px',
  marginTop: '10px',
});
export const container = style({
  width: 'calc(100% - 100px)', // Ensures fixed 50px space on each side
  maxWidth: '1200px', // Limits the container's maximum width
  margin: '0 auto', // Centers the container
});
