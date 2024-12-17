'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TabNavigation from '@/components/Molecules/TabNavigation/TabNavigation';
import PortalIdentity from './PortalIdentity';
import Typography from './Typography';
import FooterSettings from './FooterSettings';
import * as styles from './style.css';

const PORTAL_TABS = ['Portal Identity', 'Typography', 'Footer Settings'];

const Portal = () => {
  const [selectedTab, setSelectedTab] = useState(PORTAL_TABS[0]);

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
      <TabNavigation 
        selected={selectedTab} 
        onChange={setSelectedTab} 
        tabs={PORTAL_TABS}
      />
      <AnimatePresence mode='wait'>
        <motion.div
          key={selectedTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {renderTabContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Portal;
