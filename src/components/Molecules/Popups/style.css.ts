import { style } from '@vanilla-extract/css';

const buttonBase = style({
  fontSize: '14px',
  borderRadius: '4px',
  cursor: 'pointer',
  height: '50px',
  width: '120px',
  border: 'none',
});

const centeredText = style({
  textAlign: 'center',
  marginTop: '20px',
});

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
});

export const form = style({
  marginBottom: '40px',
});

export const content = style({
  background: '#1E1E1E',
  color: '#FFFFFF',
  borderRadius: '8px',
  width: '90%',
  maxWidth: '500px',
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.25)',
});

export const formGroup = style({
  width: '400px',
  display: 'flex',
  marginLeft: 'auto',
  marginRight: 'auto',
  flexDirection: 'column',
});

export const label = style({
  marginTop: '20px',
  marginBottom: '5px',
});

export const input = style({
  backgroundColor: 'rgba(43, 43, 43, 1)',
  color: '#fff',
  height: '100%',
  padding: '12px 16px',
  borderRadius: '12px',
  border: 'none',
  outline: 'none',
  fontSize: '14px',
  width: '100%',
  boxSizing: 'border-box',
  '::placeholder': {
    color: '#555',
  },
  ':focus': {
    boxShadow: '0px 0px 4px rgba(255, 255, 255, 0.2)',
  },
});

export const button = style([
  buttonBase,
  {
    color: 'white',
    opacity: 0.7,
    backgroundColor: '#1E1E1E',
    selectors: {
      '&:hover': {
        opacity: 1,
      },
    },
  },
]);

export const primaryButton = style([
  buttonBase,
  {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    color: 'black',
    selectors: {
      '&:hover': {
        backgroundColor: '#181818',
        color: 'white',
      },
    },
  },
]);

export const dangerButton = style([
  buttonBase,
  {
    backgroundColor: '#DC2626',
    color: 'white',
    selectors: {
      '&:hover': {
        backgroundColor: '#FF4C4C',
        color: 'white',
      },
    },
  },
]);

export const title = style([
  centeredText,
]);

export const description = style([
  centeredText,
  {
    color: '#A1A1A1',
  },
]);

export const buttonGroup = style({
  display: 'flex',
  gap: '8px',
  width: '400px',
  padding: '10px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '20px',
});

export const deleteButtonGroup = style({
  display: 'flex',
  gap: '8px',
  width: '90%',
  padding: '10px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '20px',
});

export const buttonWrapper = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const header = style({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '10px',
});

export const closeButton = style({
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      opacity: 0.7,
    },
  },
});

export const closeIcon = style({
  color: 'white',
  selectors: {
    [`${closeButton}:hover &`]: {
      color: 'black',
    },
  },
});

export const closeWrapper = style({
  position: 'relative',
  height: '10px',
});