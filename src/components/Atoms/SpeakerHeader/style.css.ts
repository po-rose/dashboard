import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: '#212121',
  margin: '20px 2px',
  height: '72px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 30px',
  position: 'sticky',
  top: 0,
  zIndex: 1,
});

export const inputContainer = style({
  display: 'flex',
  height: '42px',
  width: '387px',
  alignItems: 'center',
  backgroundColor: '#181818',
  borderRadius: '999px',
  paddingLeft: '10px',
});

export const input = style({
  flex: 1,
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  color: '#fff',
  fontSize: '14px',
  '::placeholder': {
    color: '#b3b3b3', // Lighter color for the placeholder
  },
});

export const icon = style({
  marginLeft: '8px',
  marginRight: '25px',
  fontSize: '16px', // Adjust size as needed
  color: '#b3b3b3',
});

export const addNewButton = style({
  height: '42px',
  width: '166px',
  backgroundColor: '#181818',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '20px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#282828', // Darker color on hover
  },
});
