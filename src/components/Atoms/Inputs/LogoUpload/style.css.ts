import { style } from '@vanilla-extract/css'

export const sectionTitle = style({
  fontSize: '16px',
  fontWeight: 400,
  color: 'white',
});

export const sectionSubTitle = style({
  fontSize: '14px',
  fontWeight: 400,
  color: 'rgba(151, 151, 151, 1)',
  marginTop: '5px',
});

export const iconContainer = style({
  backgroundColor: 'rgba(43, 43, 43, 1)',
  borderRadius: '100px',
  height: '100px',
  width: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 0.1s ease',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'rgba(53, 53, 53, 1)',
  }
});
