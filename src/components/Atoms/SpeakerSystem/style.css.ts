import { style } from '@vanilla-extract/css';

export const container = style({
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',   
});

export const subContainer = style({
    backgroundColor: 'rgba(33, 33, 33, 1)',
    width: 'calc(100% - 40px)',
    maxWidth: '1100px',
    margin: '0 auto',
    borderRadius: '16px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
});

export const sectionTitle = style({
    color: 'rgba(255, 255, 255, 1)',
    fontSize: '18px',
    fontWeight: 400,
    margin: '30px 0px 20px 0px',
});

export const subTitle = style({
    fontSize: '16px', 
    fontWeight: 400
})

export const textStyle = style({
    fontSize: '14px', 
    fontWeight: 200
})

export const nameStyle = style({
    backgroundColor: "#DC2626",
    width: 'calc(100% - 40px)',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px 10px 20px',
    borderRadius: '8px',
    fontSize: '16px', 
    fontWeight: 400
})

export const searchStyle = style({
    backgroundColor: 'rgba(43, 43, 43, 1)',
    width: 'calc(100% - 40px)',
    display: 'flex',
    gap: '20px',
    padding: '10px 20px 10px 20px',
    borderRadius: '8px',
    fontSize: '16px', 
    fontWeight: 400
})

export const buttonStyle = style({
    backgroundColor: "#DC2626",
    color: 'white',
    fontSize: '16px', 
    fontWeight: 400,
    padding: '10px',
    width: '156px',
    textAlign: 'center',
    borderRadius: '6px',
    cursor: 'pointer'        
})