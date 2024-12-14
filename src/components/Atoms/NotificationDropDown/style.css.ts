import { style } from '@vanilla-extract/css';

export const toggler = style({
  cursor: 'pointer',
  display: 'inline-flex',
  position: 'relative',
});

export const dropdown = style({
  position: 'absolute',
  padding: '15px 20px',
  top: 'calc(100% + 10px)', // Ensures the dropdown is spaced below the triggering element
  right: '0', // Aligns the dropdown to the right
  width: '400px', // Matches the width from your design
  backgroundColor: 'rgba(0, 0, 0, 0.66)', // Dark background color
  overflow: 'hidden', // Ensures rounded corners apply to the content inside
  zIndex: '100',
  border: '1px solid rgba(33, 33, 33, 0.5)',
  backdropFilter: 'blur(11px)',
  WebkitBackdropFilter: 'blur(11px)',

  boxShadow: '0px 18px 33px rgba(0, 0, 0, 0.66)',

  borderRadius: '10px', // Optional rounded corners
});

export const dropdownIcon = style({
  textAlign: 'center',
  height: '20px',
  width: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
  borderRadius: '50%',
  cursor: 'pointer',
  ':hover': {
    background: 'rgba(255,255,255,0.1)',
  },
});
