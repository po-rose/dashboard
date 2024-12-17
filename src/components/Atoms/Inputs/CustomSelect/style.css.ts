// inputStyles.css.ts
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '16px',
  width: '100%',
});

export const dropDownIcon = style({
  paddingRight: '10px'
});

export const labelStyle = style({
  color: 'white',
  fontWeight: 600,
  fontSize: '18px',
});

export const required = style({
  color: 'red',
  marginLeft: '4px',
});

export const inputContainer = style({
  backgroundColor: 'rgba(33, 33, 33, 1)',
  borderRadius: '16px',
  marginTop: '15px',
  height: '55px',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
});

export const inputContainerwithoutWrapper = style({
  backgroundColor: 'rgba(33, 33, 33, 1)',
  borderRadius: '16px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});
