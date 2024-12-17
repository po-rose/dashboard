'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TabNavigation from '@/components/Molecules/TabNavigation/TabNavigation';
import Plans from './Plans';
import PaymentHistory from './PaymentHistory';
import PaymentMethod from './PaymentMethod';
import * as styles from './style.css';

const BILLING_TABS = ['Plans', 'Payment History', 'Payment Method'];

const BillingPlans = () => {
  const [selectedTab, setSelectedTab] = useState(BILLING_TABS[0]);

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'Plans':
        return <Plans />;
      case 'Payment History':
        return <PaymentHistory />;
      case 'Payment Method':
        return <PaymentMethod />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <TabNavigation 
        selected={selectedTab} 
        onChange={setSelectedTab} 
        tabs={BILLING_TABS}
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

export default BillingPlans;
