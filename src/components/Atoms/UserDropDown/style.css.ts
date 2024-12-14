import { style } from '@vanilla-extract/css';

// The toggler wrapper to hold the selector and dropdown
export const toggler = style({
  cursor: 'pointer',
  display: 'inline-flex',
  position: 'relative',
});

export const profileSelector = style({
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
});

// Dropdown container
export const dropdown = style({
  zIndex: 50000,
  position: 'absolute',
  padding: '15px 20px',
  top: 'calc(100% + 10px)', // Ensures the dropdown is spaced below the triggering element
  right: '0', // Aligns the dropdown to the right
  width: '240px', // Matches the width from your design
  backgroundColor: 'rgba(0, 0, 0, 0.66)', // Dark background color
  overflow: 'hidden', // Ensures rounded corners apply to the content inside
  border: '1px solid rgba(33, 33, 33, 0.5)',
  backdropFilter: 'blur(11px)',
  WebkitBackdropFilter: 'blur(11px)',

  boxShadow: '0px 18px 33px rgba(0, 0, 0, 0.66)',

  borderRadius: '10px', // Optional rounded corners
});

// Each dropdown item
export const dropdownItem = style({
  display: 'flex',
  alignItems: 'center',
  // padding: '20px',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease', // Smooth hover effect
  color: '#ffffff', // White text for better contrast
  ':hover': {
    backgroundColor: '#333333', // Slightly lighter background on hover
  },
});

// Optional style for text inside each item
export const text = style({
  fontSize: '14px',
  fontWeight: '500',
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
