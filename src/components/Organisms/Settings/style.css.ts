import { style } from '@vanilla-extract/css';

export const container = style({
  width: 'calc(100% - 100px)',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px 40px 40px 40px',
});

export const sectionTitle = style({
  color: 'rgba(255, 255, 255, 1)',
  fontSize: '18px',
  fontWeight: 600,
  margin: '30px 0px 20px 0px',
});
