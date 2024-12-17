import { style, globalStyle } from '@vanilla-extract/css';

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
  padding: '10px',
  height: '55px',
  display: 'flex',
  alignItems: 'center',
});

export const calendarIcon = style({
  background: 'rgba(43, 43, 43, 1)',
  height: '100%',
  width: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '12px 0 0 12px',
});

export const inputField = style({
  backgroundColor: 'rgba(43, 43, 43, 1)',
  color: '#fff',
  height: '100%',
  width: '100%',
  padding: '12px 16px',
  borderRadius: '12px 12px ',
  border: 'none',
  outline: 'none',
  fontSize: '14px',
  boxSizing: 'border-box',
  textAlign: 'center',
  '::placeholder': {
    color: '#555',
    textAlign: 'center',
  },
  ':focus': {
    boxShadow: '0px 0px 4px rgba(255, 255, 255, 0.2)',
  },
});

globalStyle('.flatpickr-calendar', {
  backgroundColor: 'rgba(33, 33, 33, 1)',
  color: '#fff',
});

globalStyle('.flatpickr-day', {
  backgroundColor: 'rgba(33, 33, 33, 1)',
  color: '#fff',
  borderRadius: '50%',
});

globalStyle('.flatpickr-day:hover, .flatpickr-day:focus', {
  backgroundColor: '#201c1c !important',
  borderColor: '#fff !important',
});

globalStyle('.flatpickr-day.selected', {
  backgroundColor: '#201c1c !important',
  borderColor: '#fff !important',
});

globalStyle('.flatpickr-day.selected:hover', {
  backgroundColor: '#201c1c !important',
  borderColor: '#2fff !important',
});

globalStyle('.flatpickr-months .flatpickr-month', {
  backgroundColor: 'rgba(33, 33, 33, 1)',
  color: '#fff',
});

globalStyle('.flatpickr-current-month .flatpickr-monthDropdown-months', {
  backgroundColor: 'rgba(33, 33, 33, 1)',
  color: '#fff',
});

globalStyle('span.flatpickr-weekday', {
  backgroundColor: 'rgba(33, 33, 33, 1)',
  color: '#fff',
});

globalStyle('.flatpickr-months .flatpickr-next-month svg', {
  fill: 'rgba(63, 63, 63, 1)',
  color: 'rgba(43, 43, 43, 1)',
});

globalStyle('.flatpickr-months .flatpickr-prev-month svg', {
  fill: 'rgba(63, 63, 63, 1)',
  color: 'rgba(43, 43, 43, 1)',
});

globalStyle('.flatpickr-months .flatpickr-next-month:hover svg ', {
  fill: '#fff' ,
  color: '#fff',
});

globalStyle('.flatpickr-months .flatpickr-prev-month:hover svg ', {
  fill: '#fff' ,
  color: '#fff',
});

// Month dropdown background
globalStyle('.flatpickr-monthDropdown-months', {
  backgroundColor: 'rgba(33, 33, 33, 1) !important',
});

// Month dropdown options
globalStyle('.flatpickr-monthDropdown-month', {
  backgroundColor: 'rgba(33, 33, 33, 1) !important',
  color: '#fff !important',
});

// Selected month in dropdown
globalStyle('.flatpickr-monthDropdown-months .selected', {
  backgroundColor: 'rgba(63, 63, 63, 1) !important',
});

// Month dropdown when opened
globalStyle('.flatpickr-monthDropdown-months:focus', {
  backgroundColor: 'rgba(33, 33, 33, 1) !important',
});

// Container of the month dropdown
globalStyle('.flatpickr-current-month', {
  backgroundColor: 'rgba(33, 33, 33, 1) !important',
});

