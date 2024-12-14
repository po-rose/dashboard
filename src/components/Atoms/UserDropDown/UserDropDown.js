'use client';

import { useState, useEffect, useRef } from 'react';
import { dropdown, dropdownItem, toggler, dropdownIcon } from './style.css';
import { CircleUserRound, LogOut } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const UserDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
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

  return (
    <div ref={dropdownRef} className={toggler} onClick={toggleDropdown}>
      <CircleUserRound className={dropdownIcon} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={dropdown}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className={dropdownItem}
              style={{
                padding: '20px',
                borderBottom: '0.5px solid rgba(255, 255, 255, 0.66)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <CircleUserRound size={30} />
              <div style={{ marginLeft: '10px' }}>
                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>John Doe</p>
                <p style={{ fontSize: '12px', marginTop: '4px' }}>johndoe@test.com</p>
              </div>
            </div>
            {[
              { text: 'Switch Portal', link: '#' },
              { text: 'Account Settings', link: '/settings' },
            ].map((item, key) => {
              return (
                <Link
                  href={item?.link}
                  key={key}
                  className={dropdownItem}
                  style={{ padding: '15px 20px', textDecoration: 'none' }}
                >
                  {item?.text}
                </Link>
              );
            })}
            <div
              className={dropdownItem}
              style={{
                padding: '20px',
                borderTop: '0.5px solid rgba(255, 255, 255, 0.66)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <LogOut />
              <p style={{ marginLeft: '5px' }}>Logout</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserDropDown;
