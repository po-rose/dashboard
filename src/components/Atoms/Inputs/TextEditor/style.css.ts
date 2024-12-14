// // styles.css.ts
// import { style } from '@vanilla-extract/css';

// export const container = style({
//   padding: '40px',
//   backgroundColor: 'rgba(43, 43, 43, 1)',
//   width: '100%',
// });

// export const textAreaContainer = style({
//   display: 'flex',
//   flexDirection: 'column',
//   // gap: '8px',
//   width: '100%',
//   backgroundColor: 'rgba(33, 33, 33, 1)',
//   borderRadius: '20px',
//   marginTop: '10px',
// });

// export const textArea = style({
//   minHeight: '150px',
//   resize: 'vertical',
//   margin: '15px 10px 0px 10px',
//   padding: '20px',
//   borderRadius: '20px',
//   border: '0px',
//   backgroundColor: 'rgba(43, 43, 43, 1)',
//   color: 'rgba(255, 255, 255, 0.33)',
//   fontSize: '16px',
//   fontFamily: 'Lato',
//   '::placeholder': {
//     fontFamily: 'Lato',
//     color: '#555',
//   },
//   // resize: 'vertical',
//   ':focus': {
//     outline: 'none',
//     borderColor: '#666',
//   },
// });

// export const toolbar = style({
//   display: 'flex',
//   gap: '8px',
//   padding: '8px',
//   backgroundColor: 'rgba(33, 33, 33, 1)',
//   borderRadius: '4px',
//   margin: '2px 20px',
//   alignItems: 'center',
// });

// export const toolbarButton = style({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   width: '40px',
//   height: '40px',
//   border: 'none',
//   outline: 'none',
//   borderRadius: '4px',
//   backgroundColor: 'rgba(42, 42, 42, 1)',
//   color: '#fff',
//   cursor: 'pointer',
//   ':hover': {
//     backgroundColor: '#333',
//   },
//   ':active': {
//     backgroundColor: '#444',
//   },
// });

// export const activeButton = style({
//   backgroundColor: '#333',
// });

// export const labelStyle = style({
//   color: 'white',
//   fontWeight: 600,
//   fontSize: '18px',
// });




import { style } from '@vanilla-extract/css';

export const editorContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  color: '#fff',
  fontFamily: 'Arial, sans-serif',
});

export const label = style({
  fontSize: '14px',
  fontWeight: 600,
  color: '#e74c3c',
});

export const editorWrapper = style({
  backgroundColor: '#333',
  border: '1px solid #444',
  borderRadius: '8px',
  padding: '16px',
});

export const toolbar = style({
  display: 'flex',
  gap: '8px',
  marginBottom: '12px',
});

export const toolbarButton = style({
  backgroundColor: '#444',
  border: 'none',
  borderRadius: '4px',
  color: '#fff',
  cursor: 'pointer',
  padding: '8px',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#555',
  },
});

export const sizeDropdown = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const dropdown = style({
  backgroundColor: '#444',
  border: 'none',
  borderRadius: '4px',
  color: '#fff',
  padding: '4px 8px',
  cursor: 'pointer',
});

export const editableArea = style({
  minHeight: '150px',
  color: '#fff',
  fontSize: '16px',
  lineHeight: '1.5',
  outline: 'none',
});
