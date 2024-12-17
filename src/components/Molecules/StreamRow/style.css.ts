import { style } from '@vanilla-extract/css';

export const row = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)', // Define a 12-column grid for flexibility
  // gap: '16px',
  // padding: '12px 16px',
  // borderBottom: '1px solid #333',
  // alignItems: 'center',
  fontSize: '14px',
  color: '#888',
  flex: 1,
});

// Style for individual elements
export const Span2 = style({
  gridColumn: 'span 2',
  fontSize: '14px',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center', // Ensures vertical centering within the cell
  justifyContent: 'center', // Optional: centers text horizontally
  height: '100%', // Ensures the flex container fills the available space
});


export const IconSpan2 = style({
  marginLeft: 'auto',
  marginRight: 'auto',
  gridColumn: 'span 2',
  fontSize: '14px',
  textAlign: 'center',
  height: '40px',
  width: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  cursor: 'pointer',
  ':hover': {
    background: 'rgba(255,255,255,0.1)',
  },
});

export const Span1 = style({
  gridColumn: 'span 3',
});

export const rowContainer = style({
  display: 'flex',
  alignItems: 'center',
  padding: '20px',
  borderBottom: '0.1px solid rgba(255, 255, 255, 0.44)',
  ':hover': {},
});

