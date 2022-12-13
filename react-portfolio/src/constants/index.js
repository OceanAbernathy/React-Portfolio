import {
  File,
  FileDownload,
  Home,
  Message,
  Scenery,
  LinkedIn,
  Github,
  Envelope,
} from '../assets/Icons';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
    icon: Home,
  },
  {
    id: 'skills',
    title: 'Skills',
    icon: File,
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    icon: Scenery,
  },
  {
    id: 'resume',
    title: 'Resume',
    icon: FileDownload,
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: Message,
  },
];

export const navSocial = [
  {
    id: 'linkedin',
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ocean-abernathy/',
    icon: LinkedIn,
  },
  {
    id: 'github',
    title: 'Github',
    href: 'https://github.com/OceanAbernathy',
    icon: Github,
  },
  {
    id: 'email',
    title: 'Email',
    href: 'mailto:ocean.abernathy@gmail.com',
    icon: Envelope,
  },
];
