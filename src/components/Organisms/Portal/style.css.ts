import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '40px',
  width: 'calc(100% - 100px)',
  maxWidth: '1200px',
  margin: '0 auto',
});

export const sectionTitle = style({
  color: 'rgba(255, 255, 255, 1)',
  fontSize: '18px',
  fontWeight: 600,
  margin: '30px 0px 20px 0px',
});

export const addButton = style({
  backgroundColor: 'white',
  color: 'black',
  marginTop: '14px',
  height: '53px',
  borderRadius: '6px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '60px',
  fontSize: '24px',
  cursor: 'pointer',
  transition: 'background-color 0.1s ease',
  ':hover': {
    backgroundColor: '#181818',
    color: 'white',
  }
});
