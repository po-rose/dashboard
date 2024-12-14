import { style } from '@vanilla-extract/css';

export const checkboxContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#1C1C1C', // Dark background
  border: '2px solid white', // Border
  borderRadius: '4px',
  cursor: 'pointer',
  position: 'relative',
  transition: 'background-color 0.2s',
});

export const checkboxChecked = style({
  backgroundColor: '#FFFFFF', // White background when checked
});

export const hiddenCheckbox = style({
  position: 'absolute',
  opacity: 0,
  pointerEvents: 'none',
});

export const tickMark = style({
  position: 'absolute',
  top: '45%',
  left: '50%',
  width: '8px', // Adjust size for a better fit
  height: '4px',
  border: '2px solid #000', // Black tick color
  borderTop: 'none',
  borderRight: 'none',
  transform: 'translate(-50%, -50%) rotate(-45deg)', // Centers and rotates the tick
  opacity: 0,
  transition: 'opacity 0.2s',
});

export const tickVisible = style({
  opacity: 1,
});
