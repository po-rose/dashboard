'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TabNavigation from '@/components/Molecules/TabNavigation/TabNavigation'; // Assuming you have a TabNavigation component
import PortalIdentity from './PortalIdentity';
import Typography from './Typography';
import FooterSettings from './FooterSettings';
import * as styles from './style.css'; // Assuming your CSS module

const App = () => {
  const [selectedTab, setSelectedTab] = useState('Portal Identity');

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'Portal Identity':
        return <PortalIdentity />;
      case 'Typography':
        return <Typography />;
      case 'Footer Settings':
        return <FooterSettings />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <TabNavigation selected={selectedTab} onChange={setSelectedTab} />
      <AnimatePresence mode='wait'>
        <motion.div
          key={selectedTab} // Key should change when the tab changes
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {renderTabContent()}
        </motion.div>
      </AnimatePresence>
      {/* <FooterSettings /> */}
    </div>
  );
};

export default App;
