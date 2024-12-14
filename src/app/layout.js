// import localFont from 'next/font/local';
'use client';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
import { SidebarProvider, useSidebar } from '@/context/SidebarContext';
import 'flatpickr/dist/themes/dark.css';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { motion } from 'framer-motion';

// export const metadata = {
//   title: 'Dashboard',
//   description: 'Live Streaming Dashboard',
// };

const MainContent = ({ children }) => {
  const sidebarContext = useSidebar();

  const sidebarVariants = {
    open: {
      width: 'calc(100% - 291px)', // Set to your expanded width,
      marginLeft: '291px',
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
    collapsed: {
      width: 'calc(100% - 80px)', // Set to your collapsed width
      marginLeft: '80px',
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <motion.main
      variants={sidebarVariants}
      initial={sidebarContext?.isCollapsed ? 'collapsed' : 'open'}
      style={{
        height: '100%',
        backgroundColor: 'rgba(24, 24, 24, 1)',
      }}
      animate={sidebarContext?.isCollapsed ? 'collapsed' : 'open'}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <Navbar />
      {children}
    </motion.main>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <SidebarProvider>
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <MainContent>{children}</MainContent>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
