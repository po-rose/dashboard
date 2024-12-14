'use client';
import { useState, useRef, useEffect } from 'react';
import { Bell, Newspaper, TriangleAlert } from 'lucide-react';
import { toggler, dropdown, dropdownIcon } from './style.css';
import { CircleAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NotificationDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const notifications = [
    {
      text: 'Hello world',
      title: 'Title',
      color: '#DC2626',
      time: 'a year ago',

      icon: <TriangleAlert color='#DC2626' size={30} />,
    },
    {
      text: 'Hello world',
      title: 'Title',
      color: '#FFFF67',
      time: 'a year ago',

      icon: <CircleAlert color='#FFFF67' size={30} />,
    },
    {
      text: 'Hello world',
      time: 'a year ago',
      color: '#6193FF',
      title: 'Title',
      icon: <Newspaper color='#6193FF' size={30} />,
    },
  ];

  return (
    <div ref={dropdownRef} className={toggler} onClick={toggleDropdown}>
      <Bell className={dropdownIcon} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={dropdown}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Notifications</p>

            {notifications.map(({ color, text, time, icon, title }, index) => (
              <div
                style={{
                  width: '100%',
                  maxHeight: '300px',
                  margin: '20px 0px',
                }}
                key={index}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: '0.5px solid rgba(255, 255, 255, 0.66)',
                    paddingBottom: '20px',
                  }}
                >
                  <div style={{ width: '30px' }}>{icon}</div>
                  <div style={{ marginLeft: '20px' }}>
                    <p style={{ color, fontWeight: 700, fontSize: '16px' }}>{title}</p>
                    <p style={{ flex: 1, fontSize: '14px', fontWeight: 400, margin: '10px 0' }}>
                      {text}
                    </p>
                    <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>{time}</p>
                  </div>
                </div>
              </div>
            ))}
            <div style={{ textAlign: 'center' }}>Dismiss All</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationDropDown;
