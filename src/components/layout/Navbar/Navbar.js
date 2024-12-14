'use client';
import { images } from '@/config';
import { navbar, pageTitle, icon, dropdownIcon } from './style.css';
import Image from 'next/image';
import UserDropDown from '@/components/Atoms/UserDropDown';
import { usePathname, useRouter } from 'next/navigation';
import { Bell, CalendarPlus, MoveRight, ChevronRight } from 'lucide-react';
import NotificationDropDown from '@/components/Atoms/NotificationDropDown';

const Navbar = () => {
  const pathname = usePathname();
  const route = useRouter();
  function formatRoutePath(route) {
    // Remove any leading or trailing slashes and split the path into parts
    const parts = route.replace(/^\/|\/$/g, '').split('/');

    // Transform each part, ensuring proper capitalization and handling hyphenated words
    const formattedParts = parts.map(
      (part) =>
        part
          .split('-') // Split hyphenated words
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
          .join(' ') // Rejoin with spaces
    );

    // Return JSX with the icon between the parts
    return formattedParts.map((part, index) => (
      <span key={index} className='route-part'>
        {part}
        {index < formattedParts.length - 1 && <ChevronRight className={icon} />}
      </span>
    ));
  }

  return (
    <div className={navbar}>
      {/* Page title */}

      <p className={pageTitle}>{formatRoutePath(pathname)}</p>

      {/* CTA */}
      <div style={{ display: 'flex', gap: '40px' }}>
        <NotificationDropDown />

        <CalendarPlus
          className={dropdownIcon}
          style={{ cursor: 'pointer' }}
          onClick={() => route.push('/broadcast/schedule-broadcast')}
        />
        <UserDropDown />
      </div>
    </div>
  );
};
export default Navbar;
