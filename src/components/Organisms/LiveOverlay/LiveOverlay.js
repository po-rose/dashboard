'use client';

import React, { useState } from 'react';
import SaveChanges from '@/components/Molecules/SaveChanges';

// Custom Select Component
const Select = ({ options, value, onChange }) => {
  return (
    <select
      style={{
        width: '200px',
        padding: '10px',
        borderRadius: '12px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#333', // Dark background
        color: 'white', // White text color
        border: '1px solid #666', // Slight border
      }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

const LiveOverlay = () => {
  const [styleType, setStyleType] = useState('Style 1');

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        Speaker Style Settings
      </h1>

      {/* Dropdown with 2 styles */}
      <Select options={['Style 1', 'Style 2']} value={styleType} onChange={setStyleType} />

      {/* Conditional rendering based on the selected style */}
      {styleType === 'Style 1' && (
        <div>
          <h2>With Speaker</h2>
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 255, 1)', // Blue background for Style 1
              borderRadius: '16px',
              height: '200px',
              paddingTop: '30px',
              marginTop: '15px',
            }}
          >
            <div
              style={{
                backgroundColor: 'black',
                color: 'white',
                fontWeight: '600',
                padding: '10px 20px',
                borderRadius: '10px 10px 0 0',
                marginLeft: '30px',
                width: '200px',
              }}
            >
              Speaker Name
            </div>
            <p
              style={{
                height: '79px',
                backgroundColor: 'white',
                color: 'black',
                margin: '0 30px',
                borderRadius: '0px 0px 10px 10px',
                display: 'flex',
                alignItems: 'center',
                fontSize: '32px',
                fontWeight: 500,
                paddingLeft: '20px',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing...
            </p>
          </div>

          <h2 style={{ marginTop: '20px' }}>Without Speaker</h2>
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 255, 1)', // Same blue background
              borderRadius: '16px',
              height: '200px',
              paddingTop: '30px',
              marginTop: '15px',
            }}
          >
            <p
              style={{
                height: '79px',
                backgroundColor: 'white',
                color: 'black',
                margin: '0 30px',
                borderRadius: '0px 0px 10px 10px',
                display: 'flex',
                alignItems: 'center',
                fontSize: '32px',
                fontWeight: 500,
                paddingLeft: '20px',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing...
            </p>
          </div>
        </div>
      )}

      {styleType === 'Style 2' && (
        <div>
          <h2>With Speaker</h2>
          <div
            style={{
              backgroundColor: 'rgba(0, 255, 0, 1)', // Green background for Style 2
              borderRadius: '16px',
              height: '200px',
              paddingTop: '30px',
              marginTop: '15px',
            }}
          >
            <div
              style={{
                backgroundColor: 'black',
                color: 'white',
                fontWeight: '600',
                padding: '10px 20px',
                borderRadius: '10px 10px 0 0',
                marginLeft: '30px',
                width: '200px',
              }}
            >
              Speaker Name
            </div>
            <p
              style={{
                height: '79px',
                backgroundColor: 'white',
                color: 'black',
                margin: '0 30px',
                borderRadius: '0px 0px 10px 10px',
                display: 'flex',
                alignItems: 'center',
                fontSize: '32px',
                fontWeight: 500,
                paddingLeft: '20px',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing...
            </p>
          </div>

          <h2 style={{ marginTop: '20px' }}>Without Speaker</h2>
          <div
            style={{
              backgroundColor: 'rgba(0, 255, 0, 1)', // Same green background
              borderRadius: '16px',
              height: '200px',
              paddingTop: '30px',
              marginTop: '15px',
            }}
          >
            <p
              style={{
                height: '79px',
                backgroundColor: 'white',
                color: 'black',
                margin: '0 30px',
                borderRadius: '0px 0px 10px 10px',
                display: 'flex',
                alignItems: 'center',
                fontSize: '32px',
                fontWeight: 500,
                paddingLeft: '20px',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing...
            </p>
          </div>
        </div>
      )}

      <div style={{ marginTop: '40px' }}>
        <SaveChanges />
      </div>
    </div>
  );
};

export default LiveOverlay;
