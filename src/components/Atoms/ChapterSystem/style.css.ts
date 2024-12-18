import { style } from '@vanilla-extract/css';

export const container = style({
    width: '100%',
    height: '100%',
    maxWidth: '1200px',
    margin: '0 auto',  
});

export const subContainer = style({
    backgroundColor: 'rgba(33, 33, 33, 1)',
    width: 'calc(100% - 40px)',
    maxWidth: '1100px',
    margin: '0 auto',
    borderRadius: '16px',
    padding: '20px 20px 50px 20px',
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

export const buttonRowStyle = style({
    width: '100%',
    display: 'flex',
    padding: '10px 0px 20px 0px',
    borderRadius: '8px',
    gap: '20px',
})

export const addButtonStyle = style({
    backgroundColor: "#fff",
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center', 
    height: '44px',
    width: '120px',
    borderRadius: '8px',
    cursor: 'pointer',
    padding: '0px 6px 0px 6px',
})

export const addButtonText = style({
    color: 'black',
    fontSize: '14px',
    fontWeight: 'bold',
    textAlign: 'center',
})

export const publishButtonStyle = style({
    backgroundColor: "#DC2626",
    color: 'white',
    fontSize: '18px', 
    fontWeight: 400,
    padding: '20px 10px 20px 10px',
    width: '125px',
    textAlign: 'center',
    borderRadius: '6px',
    cursor: 'pointer'        
})

export const clearButtonStyle = style({
    backgroundColor: "#000",
    color: 'white',
    fontSize: '18px', 
    fontWeight: 400,
    padding: '20px 10px 20px 10px',
    width: '125px',
    textAlign: 'center',
    borderRadius: '6px',
    cursor: 'pointer'        
})

export const rowStyle = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

export const actionStyle = style({
    width: '75px',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '25px',
})

export const buttonStyle = style({
    cursor: 'pointer',
    color: 'white',
    fontSize: '25px',
})

export const lineStyle = style({
    backgroundColor: '#555',
    height: '1px',
    border: 'none',
    margin: '32px 0px 32px 0px',
})