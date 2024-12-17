import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '40px',
  width: 'calc(100% - 80px)',
  margin: '0 auto',
});

export const cols3 = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px',
  marginTop: '10px',
});

export const cols4 = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '10px',
});

export const sectionTitle = style({
  color: 'rgba(255, 255, 255, 1)',
  fontSize: '18px',
  fontWeight: 600,
  margin: '30px 0px 20px 0px',
});

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px',
});

export const upgradeButton = style({
  height: '42px',
  width: '130px',
  backgroundColor: '#212121',
  color: '#FFFFFF',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.1s ease',
  ':hover': {
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
});

export const limitsTable = style({
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: 0,
  marginTop: '16px',
  color: 'white',
  borderRadius: '16px',
  overflow: 'hidden'
});

export const tableHeader = style({
  padding: '20px',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  color: 'white',
  fontSize: '14px',
  fontWeight: '600'
});

export const tableCell = style({
  padding: '20px',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  fontSize: '14px',
  fontWeight: '500',
  verticalAlign: 'middle'
});

export const additionalInfo = style({
  marginTop: '24px',
  color: 'rgba(255, 255, 255, 0.4)',
  fontSize: '12px',
  lineHeight: '1.5'
});

export const bulletPoint = style({
  marginTop: '8px',
  paddingLeft: '16px',
  color: 'rgba(255, 255, 255, 0.4)',
  fontSize: '12px'
});
