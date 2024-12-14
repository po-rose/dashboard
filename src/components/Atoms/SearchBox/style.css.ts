import { style } from '@vanilla-extract/css';

export const inputContainer = style({
  display: 'flex',
  height: '42px',
  width: '387px',
  alignItems: 'center',
  backgroundColor: 'var(--background-color, #212121)',
  borderRadius: '999px',
  paddingLeft: '10px',
  selectors: {
    '&:focus-within': {
      boxShadow: '0 0 8px 2px rgba(255,255,255,0.1)', // Green glow effect
    },
  },
});

export const input = style({
  flex: 1,
  paddingLeft: '10px',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  color: '#fff',
  height: '100%',
  borderRadius: '999px',
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
