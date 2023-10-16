import { FileDownload, Home, Message, Scenery } from '../assets/Icons';

export const navLinks = [
  {
    id: '#home',
    target: '_self',
    title: 'Home',
    icon: Home,
  },
  {
    id: '#portfolio',
    target: '_self',
    title: 'Portfolio',
    icon: Scenery,
  },
  {
    id: 'https://oceanabernathy.com/Ocean_Abernathy_Resume.pdf',
    target: '_blank',
    title: 'Resume',
    icon: FileDownload,
  },
  {
    id: '#contact',
    target: '_self',
    title: 'Contact',
    icon: Message,
  },
];
