import { style } from '@vanilla-extract/css';

export const labelStyle = style({
  color: 'white',
  fontWeight: 600,
  fontSize: '18px',
});

export const required = style({
  color: 'red',
  marginLeft: '4px',
});

export const inputContainer = style({
  backgroundColor: 'rgba(33, 33, 33, 1)',
  borderRadius: '16px',
  padding: '10px',
  height: '55px',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  marginTop: '15px',
});

export const calendarIcon = style({
  background: 'rgba(43, 43, 43, 1)',
  height: '100%',
  width: '4%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '12px 0 0 12px',
});

export const inputField = style({
  backgroundColor: 'rgba(43, 43, 43, 1)',
  color: '#fff',
  height: '100%',
  width: '100%',
  paddingLeft: '40px',
  borderRadius: '12px',
  border: 'none',
  outline: 'none',
  fontSize: '14px',
  boxSizing: 'border-box',
  '::placeholder': {
    color: '#555',
  },
  ':focus': {
    boxShadow: '0px 0px 4px rgba(255, 255, 255, 0.2)',
  },
});

export const timePickerContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(43, 43, 43, 1)',
  color: '#fff',
  height: '100%',
  width: '100%',
  borderRadius: '12px',
  padding: '10px',
  border: 'none',
  outline: 'none',
  fontSize: '14px',
  boxSizing: 'border-box',
  '::placeholder': {
    color: '#555',
  },
  ':focus': {
    boxShadow: '0px 0px 4px rgba(255, 255, 255, 0.2)',
  },
});

export const clockIcon = style({
  left: 20,
  zIndex: '100',
  position: 'absolute',
});

export const thinScrollbar = style({
  '::-webkit-scrollbar': {
    width: '4px',
  },
  '::-webkit-scrollbar-track': {
    background: 'white',
  },
  '::-webkit-scrollbar-thumb': {
    background: 'gray',
  },
});


export const dropdown = style([
  {
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '40%',
    maxHeight: '250px',
    overflowY: 'auto',
    zIndex: 10,
    backgroundColor: '#2a2a2a',
    border: '1px solid #333',
    borderRadius: '8px 0px 0px 8px',
  },
  thinScrollbar,
]);

export const dropdownItem = style({
  padding: '8px',
  fontSize: '14px',
  color: '#fff',
  cursor: 'pointer',
  borderBottom: 'none',
  textAlign: 'center',
  ':hover': {
    backgroundColor: 'rgba(24, 24, 24, 1)', 
  },
});

export const placeholder = style({
  color: '#555',
});
