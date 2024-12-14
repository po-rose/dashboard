import { style } from '@vanilla-extract/css';

export const pricingCard = style({
  height: '721px',
  backgroundColor: '#2A2A2A',
  border: '3px solid #2E2E3A',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0px 10px',
});

export const title = style({
  fontSize: '22px',
  fontWeight: 700,
  color: 'rgba(255, 255, 255, 1)',
});

export const subtitle = style({
  fontSize: '13px',
  fontWeight: 500,
  color: 'rgba(255, 255, 255, 0.44)',
});

export const price = style({
  fontSize: '38px',
  fontWeight: 700,
});

export const month = style({
  color: 'rgba(255, 255, 255, 0.44)',
  fontSize: '19px',
  fontWeight: 500,
});

export const bestValue = style({
  background: 'rgba(234, 179, 8, 1)',
  fontSize: '14px',
  fontWeight: 700,
  borderRadius: '12px',
  height: '26px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  width: '98px',
});

export const feature = style({
  fontSize: '16px',
  fontWeight: 600,
});

export const primaryButton = style({
  backgroundColor: 'rgba(33, 33, 33, 1)',
  borderRadius: '8px',
  color: 'white',
  fontSize: '16px',
  fontWeight: 600,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '47px',
  marginTop: '10px',
});
