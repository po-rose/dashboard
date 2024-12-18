// import localFont from 'next/font/local';
'use client';
import '../globals.css';
import 'flatpickr/dist/themes/dark.css';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  );
}
