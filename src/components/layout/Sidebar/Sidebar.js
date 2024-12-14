'use client';

import { images } from '@/config';
import {
  sidebar,
  sidebarCollapsed,
  dashboardInfoContainer,
  logo,
  collapsedDashboardInfoContainer,
} from './style.css';
import { SIDE_BAR_DATA } from './constants';
import Image from 'next/image';

import { Menu } from 'lucide-react';
import { useSidebar } from '@/context/SidebarContext';
import SideBarItem from './SideBarItem';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const sidebarContext = useSidebar();

  const toggleSidebar = () => {
    sidebarContext?.toggleSidebar();
  };

  const sidebarVariants = {
    open: {
      width: '291px', // Set to your expanded width
      transition: { duration: 0.1, ease: 'easeInOut' },
    },
    collapsed: {
      width: '80px', // Set to your collapsed width
      transition: { duration: 0.1, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      className={sidebarContext?.isCollapsed ? sidebarCollapsed : sidebar}
      variants={sidebarVariants}
      animate={sidebarContext?.isCollapsed ? 'collapsed' : 'open'}
      initial={sidebarContext?.isCollapsed ? 'collapsed' : 'open'}
    >
      <div
        className={
          sidebarContext?.isCollapsed ? collapsedDashboardInfoContainer : dashboardInfoContainer
        }
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {sidebarContext?.isCollapsed ? (
            <Menu onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
          ) : (
            <Image src={images.logo} alt='logo' width={33} height={33} />
          )}
          {!sidebarContext?.isCollapsed && <p className={logo}>LOGO</p>}
        </div>
        {sidebarContext?.isCollapsed ? null : (
          <Menu onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
        )}
      </div>

      {SIDE_BAR_DATA.map((item, index) => (
        <SideBarItem item={item} index={index} key={index} sidebarContext={sidebarContext} />
      ))}
    </motion.div>
  );
};

export default Sidebar;
