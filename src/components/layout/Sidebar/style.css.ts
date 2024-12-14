import { style } from '@vanilla-extract/css';

export const sidebar = style({
  border: '1px solid rgba(255, 255, 255, 0.1)',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  background: 'rgba(33, 33, 33, 1)',
  transition: 'width 0.3s ease',
  overflowX: 'hidden',
});

export const sidebarCollapsed = style({
  border: '1px solid rgba(255, 255, 255, 0.1)',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  background: 'rgba(33, 33, 33, 1)',
  transition: 'width 0.3s ease',
  overflowX: 'hidden',
});

export const dashboardInfoContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '220px',
  margin: '40px auto 50px auto',
});

export const collapsedDashboardInfoContainer = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  margin: '40px auto 30px auto',
});

export const logo = style({
  fontWeight: 700,
  color: 'white',
  fontSize: '22px',
  marginLeft: '15px',
});

export const sidebarItem = style({
  width: '220px',
  height: '42px',
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  cursor: 'pointer',
  justifyContent: 'space-between',
  color: 'rgba(255, 255, 255, 0.5) !important',
});

export const selectedSidebarItem = style({
  width: '220px',
  height: '42px',
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  background: 'rgba(24, 24, 24, 1)',
  borderRadius: '2px',
  cursor: 'pointer',
  borderLeft: '2px solid white',
  paddingLeft: '10px',
  justifyContent: 'space-between',
  paddingRight: '10px',
});

export const collapsedSelectedSidebarItem = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  background: 'rgba(24, 24, 24, 1)',
  padding: '10px 0px',
  borderLeft: '2px solid white',
  margin: '35px 0px',
});

export const collapsedSidebarItem = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  margin: '35px 0px',
  padding: '10px 0px',
});

export const sidebarLink = style({
  fontWeight: 500,
  fontSize: '16px',
  marginLeft: '20px',
});

export const divider = style({
  content: '""',
  display: 'block',
  position: 'absolute',
  bottom: '-8px', // Space between text and underline
  left: '0',
  width: '45px', // Full width of the text
  height: '0.5px', // Thickness of the underline
  backgroundColor: 'rgba(255, 255, 255, 0.66)',
});

export const groupTitle = style({
  width: '220px',
  margin: '40px auto 18px auto',
  color: 'rgba(255, 255, 255, 0.5)',
});

// Icons classes

export const collapseIcon = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // background: 'rgba(24, 24, 24, 1)',
  padding: '10px 0px',
  margin: '10px 0px',
  position: 'relative',
});

export const selectedCollapseIcon = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(24, 24, 24, 1)',
  padding: '10px 0px',
  margin: '10px 0px',
  position: 'relative',
});

export const sidebarHover = style({
  color: 'white',
  ':hover': {
    color: 'white',
  },
});

export const unselectedColor = style({
  color: 'rgba(255, 255, 255, 0.5)',
});
