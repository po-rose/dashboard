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

export const textStyle = style({
    fontSize: '14px', 
    fontWeight: 200
})

export const buttonStyle = style({
    backgroundColor: "#16A34A",
    color: 'white',
    fontSize: '16px', 
    fontWeight: 400,
    padding: '10px',
    width: '115px',
    textAlign: 'center',
    borderRadius: '25px',
    cursor: 'pointer'
})

export const statusStyle = style({
    fontSize: '18px', 
    fontWeight: 400
})

export const rowContainer = style({
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
})

export const optionContainer = style({
    backgroundColor: 'rgba(43, 43, 43, 1)',
    padding: '15px',
    borderRadius: '16px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    height: '55px',
    marginTop: '15px',
  });
  
  export const optionButton = style({
    cursor: 'pointer',
    borderRadius: '8px',
    fontWeight: '400',
    transition: 'background-color 0.2s ease',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '18px',
  });
  
  export const activeButton = style({
    backgroundColor: '#fff',
    color: '#000',
  });
  
  export const inactiveButton = style({
    backgroundColor: 'rgba(43, 43, 43, 1)',
    color: '#ccc',
  });
  
  export const inputContainer = style({
    width: '100%',
    maxWidth: '1100px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  });

  export const inputField = style({
    backgroundColor: 'rgba(43, 43, 43, 1)',
    color: '#fff',
    height: '100%',
    padding: '16px',
    borderRadius: '8px',
    border: 'none',
    outline: 'none',
    fontSize: '20px',
    width: '100%',
    boxSizing: 'border-box',
    '::placeholder': {
      color: '#555',
    },
    ':focus': {
      boxShadow: '0px 0px 4px rgba(255, 255, 255, 0.2)',
    },
  });
