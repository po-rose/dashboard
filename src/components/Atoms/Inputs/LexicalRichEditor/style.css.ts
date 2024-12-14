import { style } from '@vanilla-extract/css';

export const toolbar = style({
  display: 'flex',
  gap: '10px',
  marginBottom: '10px',
});

export const toolbarButton = style({
  backgroundColor: '#2c2c2c',
  border: '1px solid #444',
  color: '#fff',
  borderRadius: '5px',
  cursor: 'pointer',
  padding: '5px 10px',
  ':hover': {
    backgroundColor: '#444',
  },
});

export const sizeDropdown = style({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
});

export const sizeDropdownSelect = style({
  backgroundColor: '#2c2c2c',
  border: '1px solid #444',
  color: '#fff',
  borderRadius: '5px',
  cursor: 'pointer',
  padding: '10px',
  ':hover': {
    backgroundColor: '#444',
  },
});

export const sizeDropdownOption = style({
  backgroundColor: '#2c2c2c',
  color: '#fff',
  borderRadius: '5px',
  ':hover': {
    backgroundColor: '#444',
  },
});

export const labelStyle = style({
  color: 'white',
  fontWeight: 600,
  fontSize: '18px',
});

export const editorContainer = style({
  backgroundColor: '#1e1e1e',
  borderRadius: '8px',
  padding: '10px',
  color: '#fff',
  margin: '20px 0',
});

export const editorInner = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  marginBottom: '10px',
});

export const editorInput = style({
  minHeight: '150px',
  outline: 'none',
  backgroundColor: '#2a2a2a',
  borderRadius: '8px',
  padding: '10px',
  color: '#fff',
  fontSize: '16px',
  ':focus': {
    boxShadow: '0px 0px 4px rgba(255, 255, 255, 0.2)',
  },
});

export const editorPlaceholder = style({
  position: 'absolute',
  top: '10px',
  left: '10px',
  color: '#555',
  pointerEvents: 'none',
  fontSize: '16px',
});

export const myBoldClass = style({
  fontWeight: 'bold',
});

export const myItalicClass = style({
  fontStyle: 'italic',
});

export const myUnderlineClass = style({
  textDecoration: 'underline',
});
