import React, { useState, useRef } from 'react';
import * as styles from './style.css';

const CustomTimePicker = ({ label, required }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState('Pick a time');
  const dropdownRef = useRef();

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        options.push(time);
      }
    }
    return options;
  };

  const timeOptions = generateTimeOptions();

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleBlur = (e) => {
    if (!dropdownRef.current.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <label className={styles.labelStyle}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <div
        className={styles.inputContainer}
        tabIndex={0}
        onBlur={handleBlur}
        ref={dropdownRef}
      >
        <div
          className={`${styles.timePickerContainer} ${selectedTime === 'Pick a time' ? styles.placeholder : ''}`}
          onClick={toggleDropdown}
          tabIndex={0}
          onFocus={(e) => e.currentTarget.style.boxShadow = '0px 0px 4px rgba(255, 255, 255, 0.2)'}
          onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
        >
          {selectedTime}
        </div>
        {isOpen && (
          <div className={styles.dropdown}>
            {timeOptions.map((time) => (
              <div
                key={time}
                className={styles.dropdownItem}
                onClick={() => handleTimeSelect(time)}
              >
                {time}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomTimePicker;
