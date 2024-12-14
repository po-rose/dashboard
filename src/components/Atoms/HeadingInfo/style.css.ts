import { style } from '@vanilla-extract/css';

export const popup = style({
  position: 'absolute',
  bottom: '100%',
  left: 0,
  transform: 'translateY(-5px)',
  backgroundColor: 'rgba(24, 24, 24, 1)',
  color: '#fff',
  padding: '15px',
  borderRadius: '8px',
  zIndex: '10',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  fontWeight: 400,
  fontSize: '12px',
  maxWidth: '315px',
  minWidth: '315px',
  lineHeight: '20px',
});

export const iconStyles = style({
  marginLeft: '10px',
  position: 'relative',
});

export const containerStyle = style({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
});
