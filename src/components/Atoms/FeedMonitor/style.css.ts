import { style } from '@vanilla-extract/css';

export const container = style({
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
});

export const subContainer = style({
    backgroundColor: 'rgba(33, 33, 33, 1)',
    width: 'calc(100% - 40px)',
    height: '375px',
    maxWidth: '1100px',
    borderRadius: '16px',
    padding: '20px',
});

export const sectionTitle = style({
    color: 'rgba(255, 255, 255, 1)',
    fontSize: '18px',
    fontWeight: 400,
    margin: '30px 0px 20px 0px',
});

export const playerStyle = style({
    backgroundColor: 'rgba(43, 43, 43, 1)',    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    borderRadius: '8px',
    width: 'calc(100% - 20px)',
    height: 'calc(100% - 20px)',
    maxWidth: '1200px',
    padding: '10px',
});

export const textStyle = style({
    color: '#555',
})