import { style } from '@vanilla-extract/css';

export const navbar = style({
  height: '117px',
  zIndex: 1,
  background: 'rgba(33, 33, 33, 1)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 30px',
});

export const pageTitle = style({
  fontSize: '33px',
  fontWeight: 700,
  color: 'white',
});

export const icon = style({
  margin: '0px 10px',
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