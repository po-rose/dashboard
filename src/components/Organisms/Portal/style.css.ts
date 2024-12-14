import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '40px',
  width: 'calc(100% - 100px)', // Ensures fixed 50px space on each side
  maxWidth: '1200px', // Limits the container's maximum width
  margin: '0 auto', // Centers the container
});

export const sectionTitle = style({
  color: 'rgba(255, 255, 255, 1)',
  fontSize: '18px',
  fontWeight: 600,
  margin: '30px 0px 20px 0px',
});
