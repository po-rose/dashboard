import { style } from '@vanilla-extract/css';

export const imgContainer = style({
  marginTop: '30px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});

export const avatar = style({
  height: '150px',
  width: '150px',
  background: '#323235',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden'
});

export const plusButton = style({
  position: 'relative',
  background: 'transparent',
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  border: '2px solid white',
});

export const btnContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '50px',
  marginTop: '30px',
});

export const cropContainer = style({
  position: 'absolute',
  width: '100%',
  maxWidth: '400px',
  height: '300px',
  background: 'black',
});

export const cropControls = style({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginTop: '20px',
});

export const zoomSlider = style({
  width: '150px',
});

export const saveButton = style({
  padding: '10px 20px',
  background: 'white',
  color: 'black',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  zIndex: 1,
  ':hover': {
    background: '#181818',
    color: 'white',
  },
});

export const clearButton = style({
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'white',
  borderRadius: '50%',
  width: '20px',
  height: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  zIndex: 1,
  padding: '4px',
  ':hover': {
    backgroundColor: '#181818',
  },
});

export const icon = style({
  filter: 'brightness(0)',
  selectors: {
    [`${clearButton}:hover &`]: {
      filter: 'brightness(100)',
    },
  },
});