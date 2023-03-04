import { v4 as uuidv4 } from 'uuid';

import img1 from '../assets/SliderImg/img1.jpg';
import img2 from '../assets/SliderImg/img2.jpg';
import img3 from '../assets/SliderImg/img3.jpg';
import img4 from '../assets/SliderImg/img4.jpg';
import img5 from '../assets/SliderImg/img5.jpg';
import img6 from '../assets/SliderImg/img6.jpg';

const sliderData = [
  {
    id: uuidv4(),
    title: 'Reddit Clone',
    about:
      'Reddit Clone made from tutorial using React, TypeScript, Next.js, and Chakra UI.',
    git: 'https://github.com/OceanAbernathy/reddit-clone',
    url: 'https://reddit-clone-eight-inky.vercel.app/',
    img: img1,
  },
  {
    id: uuidv4(),
    title: 'IMDb Clone',
    about:
      'IMDb Clone made from tutorial using React, Next.js, and Tailwind CSS.',
    git: 'https://github.com/OceanAbernathy/imdb-clone',
    url: 'https://imdb-clone-tawny.vercel.app/',
    img: img2,
  },
  {
    id: uuidv4(),
    title: 'Simple Weather App',
    about:
      "Weather App pulling from multiple API's, utilizing hooks and state.",
    git: 'https://github.com/OceanAbernathy/simple-weather-app',
    url: 'http://oceanabernathy.com/SimpleWeatherApp/',
    img: img3,
  },
  {
    id: uuidv4(),
    title: 'FamPicks',
    about:
      'Competitive college football app that tracks weekly teams, game times, and records the score in real time.',
    git: 'https://github.com/brandiquintos/fampicks',
    url: 'http://oceanabernathy.com/fampicks/',
    img: img4,
  },
  {
    id: uuidv4(),
    title: 'Modern Banking',
    about:
      'Banking app information and pricing page created in React with Vite, using Tailwind CSS.',
    git: 'https://github.com/OceanAbernathy/BankApp',
    url: 'http://oceanabernathy.com/BankApp/',
    img: img5,
  },
  {
    id: uuidv4(),
    title: 'Cybersafe',
    about:
      'Sample page created from a mockup, converted to be both desktop and mobile friendly.',
    git: 'https://github.com/OceanAbernathy/cybersafe',
    url: 'http://oceanabernathy.com/Cyber/',
    img: img6,
  },
];

export default sliderData;
