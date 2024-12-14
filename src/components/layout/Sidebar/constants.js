import { images } from '@/config';
import {
  LayoutDashboard,
  Radio,
  CalendarPlus,
  ListVideo,
  Speech,
  Paintbrush,
  LayoutPanelTop,
  RectangleHorizontal,
  Wallet,
  Settings,
  LogOut,
} from 'lucide-react';

export const SIDE_BAR_DATA = [
  {
    title: '',
    children: [{ icon: LayoutDashboard, title: 'Dashboard', link: '/dashboard' }],
  },
  {
    title: 'Broadcast',
    children: [
      {
        icon: CalendarPlus,
        title: 'Schedule Broadcast',
        link: '/broadcast/schedule-broadcast',
      },
      {
        icon: ListVideo,
        title: 'Management',
        link: '/broadcast/management',
      },
      {
        icon: Speech,
        title: 'Speakers',
        link: '/broadcast/speakers',
      },
    ],
  },
  {
    title: 'Customization',
    children: [
      {
        icon: LayoutPanelTop,
        title: 'Portal',
        link: '/customization/portal',
      },
      {
        icon: RectangleHorizontal,
        title: 'Live Overlay',
        link: '/customization/live-overlay',
      },
    ],
  },

  {
    title: 'Account',
    children: [
      {
        icon: Wallet,
        title: 'Billings & Plans',
        link: '/billing-and-plans',
      },
      {
        icon: Settings,
        title: 'Settings',
        link: '/settings',
      },
      {
        icon: LogOut,
        title: 'Log out',
      },
    ],
  },
];
