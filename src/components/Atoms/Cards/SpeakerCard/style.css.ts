import { style } from '@vanilla-extract/css';

export const speakerCard = style({
  height: '244px',
  backgroundColor: '#212121',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
});

export const speakerTitle = style({
  fontSize: '16px',
  fontWeight: 600,
  color: 'white',
  marginTop: '10px',
});

export const speakerName = style({
  fontSize: '14px',
  fontWeight: 400,
  marginTop: '10px',
});

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '10px',
});

export const buttonStyles = style({
  height: '33px',
  width: '33px',
  borderRadius: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  willChange: 'transform',
  ':hover': {
    transform: 'scale(1.1)',
  },
});

export const checkBox = style({
  position: 'absolute',
  top: 10,
  left: 10,
});

export const avatar = style({
  height: '100px',
  width: '100px',
  background: 'white',
  borderRadius: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const editButton = style({
  backgroundColor: 'white',
});

export const deleteButton = style({
  backgroundColor: '#DC2626',
  marginLeft: '20px',
});
