'use client';
import {
  sidebarItem,
  sidebarLink,
  selectedSidebarItem,
  groupTitle,
  divider,
  collapseIcon,
  selectedCollapseIcon,
  sidebarHover,
  unselectedColor,
} from './style.css';
import { SIDE_BAR_DATA } from './constants';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const SideBarItem = ({ item, sidebarContext, index }) => {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState(null); // Tracks hovered item

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div key={index}>
      {/* Render the title of the group */}

      {item?.title && !sidebarContext?.isCollapsed && (
        <div className={groupTitle}>
          <p
            style={{
              position: 'relative',
              display: 'inline-block',
              color: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            {item.title}
            <span className={divider} />
          </p>
        </div>
      )}

      {/* Items */}
      {item?.children?.map((subItem, subIndex) => {
        const Icon = subItem?.icon;

        return !sidebarContext?.isCollapsed ? (
          <Link
            key={subIndex}
            href={subItem?.link || '#'}
            style={{ textDecoration: 'none' }}
            onMouseEnter={() => handleMouseEnter(subIndex)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={pathname === subItem?.link ? selectedSidebarItem : sidebarItem}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Icon
                  size='18px'
                  color={
                    pathname === subItem?.link || hoveredItem === subIndex
                      ? 'white'
                      : 'rgba(255, 255, 255, 0.5) '
                  }
                />

                {!sidebarContext?.isCollapsed && (
                  <p
                    style={{
                      color:
                        pathname === subItem?.link || hoveredItem === subIndex
                          ? 'white '
                          : 'rgba(255, 255, 255, 0.5)',
                    }}
                    className={sidebarLink}
                  >
                    {subItem?.title}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ) : (
          <Link
            key={subIndex}
            href={subItem?.link || '#'}
            style={{ textDecoration: 'none' }}
            className={pathname == subItem?.link ? selectedCollapseIcon : collapseIcon}
            onMouseEnter={() => handleMouseEnter(subIndex)}
            onMouseLeave={handleMouseLeave}
          >
            {pathname === subItem?.link && (
              <div
                style={{
                  position: 'absolute',
                  height: '100%',
                  left: 0,
                  backgroundColor: 'white',
                  width: '1px',
                }}
              ></div>
            )}
            <Icon
              color={
                pathname === subItem?.link || hoveredItem === subIndex
                  ? 'white'
                  : 'rgba(255, 255, 255, 0.5)'
              }
            />
          </Link>
        );
      })}
      {sidebarContext?.isCollapsed && SIDE_BAR_DATA?.length - 1 != index && (
        <div
          style={{
            width: '45px',
            margin: '20px auto',
            height: '0.5px',
            backgroundColor: 'rgba(255, 255, 255, 0.66)',
          }}
        ></div>
      )}
    </div>
  );
};

export default SideBarItem;
