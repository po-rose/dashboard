import { style } from '@vanilla-extract/css';

export const headerContainer = style({
  display: 'flex',
  alignItems: 'center',
  background: 'rgba(33, 33, 33, 1)',
  padding: '20px',
  margin: '0px 2px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  position: 'sticky',
  top: 0,
  zIndex: 1,
});

export const header = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)', // Define a 12-column grid for flexibility
  fontSize: '14px',
  color: '#888',
  flex: 1,
});

// Style for individual elements
export const Span2 = style({
  gridColumn: 'span 2',

  fontSize: '16px',
  fontWeight: '500',
  textAlign: 'center',
});

export const Span1 = style({
  gridColumn: 'span 3',
});
