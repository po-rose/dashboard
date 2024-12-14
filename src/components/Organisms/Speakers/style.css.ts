import { style } from '@vanilla-extract/css';

export const cardContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(5,1fr)',
  rowGap: '30px',
  columnGap: '15px',
});

export const containerStyle = style({
  marginTop: '50px',
  padding: '0 30px',
});

export const paginationStyle = style({
  margin: '40px 0px',
});
