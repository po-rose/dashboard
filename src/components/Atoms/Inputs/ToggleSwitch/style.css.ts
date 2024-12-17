import { style } from '@vanilla-extract/css';

export const switchContainer = style({
  position: 'relative',
  display: 'inline-block',
  width: '44px',
  height: '24px',
  cursor: 'pointer'
});

export const input = style({
  opacity: 0,
  width: 0,
  height: 0
});

export const slider = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#2A2A2A',
  transition: '.4s',
  borderRadius: '34px',
  border: '2px solid #404040',

  selectors: {
    [`${switchContainer}:hover &`]: {
      borderColor: '#505050'
    },
    [`input:checked + &`]: {
      backgroundColor: '#404040'
    },
    [`input:checked + &::before`]: {
      transform: 'translateX(20px)',
      backgroundColor: '#fff'
    },
    '&::before': {
      position: 'absolute',
      content: '""',
      height: '16px',
      width: '16px',
      left: '2px',
      bottom: '2px',
      backgroundColor: '#808080',
      transition: '.4s',
      borderRadius: '50%'
    }
  }
});
