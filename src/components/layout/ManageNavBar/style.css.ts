import { style } from '@vanilla-extract/css';

export const manageNavbar = style({
  height: '136px',
  zIndex: 1,
  background: 'rgba(33, 33, 33, 1)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
  padding: '0px 20px 20px 0px',
}); 

export const titleStyle = style({
  fontSize: '20px',
  padding: '0px 0px 0px 100px'
})

export const dateStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  padding: '10px 20px 0px 20px',
  borderRadius: '8px',
  gap: '5px',
})

export const dateLabelStyle = style({
  backgroundColor: '#2A2A2A',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center', 
  height: '60px',
  width: '230px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '18px',
})

export const exitButtonStyle = style({
  backgroundColor: '#2A2A2A',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center', 
  height: '60px',
  width: '60px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '18px',
  marginRight: '10px'
})

export const nowButtonStyle = style({
  backgroundColor: '#2A2A2A',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center', 
  height: '60px',
  width: '93px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '18px',
})

export const buttonRowStyle = style({
  display: 'flex',
  padding: '10px 20px 10px 20px',
  borderRadius: '8px',
  gap: '10px',
})

export const overlayButtonStyle = style({
  backgroundColor: '#2A2A2A',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center', 
  height: '60px',
  width: '110px',
  borderRadius: '8px',
  cursor: 'pointer',
  padding: '0px 13px 0px 13px',
})

export const goLiveButtonStyle = style({
  backgroundColor: '#16A34A',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center', 
  height: '60px',
  width: '110px',
  borderRadius: '8px',
  cursor: 'pointer',
  padding: '0px 13px 0px 13px',
})

export const buttonText = style({
  color: 'White',
  fontSize: '18px',
  textAlign: 'center',
})