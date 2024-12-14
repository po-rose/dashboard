import { style } from '@vanilla-extract/css';

export const container = style({
  width: 'calc(100% - 100px)', // Ensures fixed 50px space on each side
  maxWidth: '1200px', // Limits the container's maximum width
  margin: '0 auto', // Centers the container
});
