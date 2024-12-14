import { style } from '@vanilla-extract/css';

export const themeCheckbox = style({
  appearance: 'none',
  width: '41px',
  height: '22px',
  background: 'linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat',
  backgroundSize: '205%',
  backgroundPosition: '0',
  transition: '0.4s',
  borderRadius: '99em',
  position: 'relative',
  cursor: 'pointer',
  fontSize: '16px',
  selectors: {
    '&::before': {
      content: '""',
      width: '12px',
      height: '12px',
      position: 'absolute',
      top: '5px',
      left: '5px',
      background: 'linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat',
      backgroundSize: '205%',
      backgroundPosition: '100%',
      borderRadius: '50%',
      transition: '0.4s',
    },
    '&:checked': {
      backgroundPosition: '100%',
    },
    '&:checked::before': {
      left: 'calc(100% - 12px - 5px)',
      backgroundPosition: '0',
    },
  },
});
