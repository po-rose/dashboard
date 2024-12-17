import { style } from '@vanilla-extract/css';

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

export const radioIndicator = style({
  height: '10px',
  width: '10px',
  backgroundColor: 'white',
  borderRadius: '100px',
  opacity: 0,
  transition: 'opacity 0.2s ease-in-out',
  ':checked': {
    opacity: 1,
  }
});
