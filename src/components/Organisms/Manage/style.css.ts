import { style } from '@vanilla-extract/css';

export const container = style({
  margin: '0 auto', // Centers the container
  display: 'flex',
  padding: '40px',
  gap: '20px',
});

export const subContainer = style({
  width:  '100%', 
  maxWidth: '1200px', // Limits the container's maximum width
});