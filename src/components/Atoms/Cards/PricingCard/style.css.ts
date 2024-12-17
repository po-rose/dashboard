import { style } from '@vanilla-extract/css';

export const pricingCard = style({
  height: '720px',
  backgroundColor: '#2A2A2A',
  border: '3px solid rgba(255, 255, 255, 0.15)',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  padding: '24px',
  position: 'relative',
  gap: '24px',

  selectors: {
    '&[data-best-value="true"]': {
      border: '3px solid rgba(234, 179, 8, 1)'
    }
  }
});

export const headerSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
});

export const featuresSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  flex: 1
});

export const featureRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
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
  textAlign: 'left'
});

export const month = style({
  color: 'rgba(255, 255, 255, 0.44)',
  fontSize: '19px',
  fontWeight: 500,
  marginLeft: '4px'
});

export const bestValue = style({
  position: 'absolute',
  top: '-13px',
  left: '50%',
  transform: 'translateX(-50%)',
  background: 'rgba(234, 179, 8, 1)',
  fontSize: '14px',
  fontWeight: 700,
  borderRadius: '12px',
  padding: '4px 12px',
  color: 'black',
  whiteSpace: 'nowrap'
});

export const feature = style({
  fontSize: '16px',
  fontWeight: 600,
  color: 'white'
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
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'rgba(45, 45, 45, 1)'
  }
});

export const priceContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  alignItems: 'flex-start'
});

export const savings = style({
  fontSize: '14px',
  color: '#26DC26',
  fontWeight: 600,
  textAlign: 'left'
});

export const customText = style({
  fontSize: '14px',
  color: 'rgba(255, 255, 255, 0.44)',
  fontWeight: 500
});
