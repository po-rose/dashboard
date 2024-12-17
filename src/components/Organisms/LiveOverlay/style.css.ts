import { style, globalStyle } from '@vanilla-extract/css';

// Common container and section title styles
export const container = style({
  padding: '0px',
  width: 'calc(100% - 80px)',
  margin: '0 auto',
});

export const sectionTitle = style({
  color: 'rgba(255, 255, 255, 1)',
  fontSize: '18px',
  fontWeight: 600,
  margin: '30px 0px 20px 0px',
});

// Style 1
export const style1 = style({
  backgroundColor: 'rgba(0, 0, 255, 1)',
  borderRadius: '16px',
  height: '200px',
  paddingTop: '30px',
  marginTop: '15px',
});

export const speakerInfo1 = style({
  backgroundColor: 'black',
  fontWeight: '600',
  padding: '10px 20px',
  borderRadius: '10px 10px 0 0',
  marginLeft: '30px',
  width: '200px',
});

globalStyle(`.${speakerInfo1}, .${speakerInfo1} *`, {
    color: 'white'
  });

export const content1 = style({
  height: '79px',
  backgroundColor: 'white',
  color: 'black',
  margin: '0 30px',
  borderRadius: '0px 0px 10px 10px',
  display: 'flex',
  alignItems: 'center',
  fontSize: '32px',
  fontWeight: 500,
  paddingLeft: '20px',
});

// Style 2
export const style2 = style({
  backgroundColor: 'rgba(0, 0, 255, 1)',
  borderRadius: '16px',
  height: '200px',
  paddingTop: '30px',
  marginTop: '15px',
});

export const speakerInfo2 = style({
  backgroundColor: 'white',
  fontWeight: '600',
  padding: '10px 20px',
  borderRadius: '10px 10px 0 0',
  marginLeft: '30px',
  width: '200px',
});

globalStyle(`.${speakerInfo2}, .${speakerInfo2} *`, {
  color: 'black'
});

export const content2 = style({
  height: '79px',
  backgroundColor: 'black',
  color: 'white',
  margin: '0 30px',
  borderRadius: '0px 0px 10px 10px',
  display: 'flex',
  alignItems: 'center',
  fontSize: '32px',
  fontWeight: 500,
  paddingLeft: '20px',
});

// Style 3
export const style3 = style({
  backgroundColor: 'rgba(0, 0, 255, 1)',
  borderRadius: '16px',
  height: '200px',
  paddingTop: '30px',
  marginTop: '15px',
  display: 'flex',
  flexDirection: 'column',
});

export const speakerInfo3 = style({
  backgroundColor: 'black',
  fontWeight: '600',
  padding: '20px 20px',
  borderRadius: '0 0 10px 10px',
  margin: '0 30px',
  width: 'auto',
  order: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center'
});

globalStyle(`.${speakerInfo3}, .${speakerInfo3} *`, {
    color: 'white'
  });

export const content3 = style({
  height: '79px',
  backgroundColor: 'white',
  color: 'black',
  margin: '0 30px',
  borderRadius: '10px 10px 0 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '32px',
  fontWeight: 500,
  order: 1,
  marginBottom: '0',
});

// Style 4
export const style4 = style({
  backgroundColor: 'rgba(0, 0, 255, 1)',
  borderRadius: '16px',
  height: '200px',
  paddingTop: '30px',
  marginTop: '15px',
  display: 'flex',
  flexDirection: 'column',
});

export const speakerInfo4 = style({
    backgroundColor: 'white',
    fontWeight: '600',
    padding: '20px 20px',
    borderRadius: '0 0 10px 10px',
    margin: '0 30px',
    width: 'auto',
    order: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
});

globalStyle(`.${speakerInfo4}, .${speakerInfo4} *`, {
    color: 'black'
  });

export const content4 = style({
    height: '79px',
    backgroundColor: 'black',
    color: 'white',
    margin: '0 30px',
    borderRadius: '10px 10px 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    fontWeight: 500,
    order: 1,
    marginBottom: '0',
  });