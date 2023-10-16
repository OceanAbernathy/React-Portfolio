import { v4 as uuidv4 } from 'uuid';

import SEUS from '../assets/SliderImg/SEUS.jpg';
import RedditClone from '../assets/SliderImg/RedditClone.jpg';
import IMDbClone from '../assets/SliderImg/IMDbClone.jpg';
import SimpleWeather from '../assets/SliderImg/SimpleWeather.jpg';
import FamPicks from '../assets/SliderImg/FamPicks.jpg';
import Cybersafe from '../assets/SliderImg/Cybersafe.jpg';

const sliderData = [
  {
    id: uuidv4(),
    title: 'SEUS Mobile Web App',
    about:
      'SEUS mockup mobile web app created using React, Chakra UI and Firebase.',
    git: 'https://github.com/OceanAbernathy/seus',
    url: 'https://oceanabernathy.com/SEUS/',
    img: SEUS,
  },
  {
    id: uuidv4(),
    title: 'Reddit Clone',
    about:
      'Reddit Clone made from tutorial using React, TypeScript, Next.js, and Chakra UI.',
    git: 'https://github.com/OceanAbernathy/reddit-clone',
    url: 'https://reddit-clone-eight-inky.vercel.app/',
    img: RedditClone,
  },
  {
    id: uuidv4(),
    title: 'IMDb Clone',
    about:
      'IMDb Clone made from tutorial using React, Next.js, and Tailwind CSS.',
    git: 'https://github.com/OceanAbernathy/imdb-clone',
    url: 'https://imdb-clone-tawny.vercel.app/',
    img: IMDbClone,
  },
  {
    id: uuidv4(),
    title: 'Simple Weather App',
    about:
      "Weather App pulling from multiple API's, utilizing hooks and state.",
    git: 'https://github.com/OceanAbernathy/simple-weather-app',
    url: 'https://oceanabernathy.com/SimpleWeatherApp/',
    img: SimpleWeather,
  },
  {
    id: uuidv4(),
    title: 'FamPicks',
    about:
      'Competitive college football app that tracks weekly teams, game times, and records the score in real time.',
    git: 'https://github.com/brandiquintos/fampicks',
    url: 'https://oceanabernathy.com/fampicks/',
    img: FamPicks,
  },
  {
    id: uuidv4(),
    title: 'Cybersafe',
    about:
      'Sample page created from a mockup, converted to be both desktop and mobile friendly.',
    git: 'https://github.com/OceanAbernathy/cybersafe',
    url: 'https://oceanabernathy.com/Cyber/',
    img: Cybersafe,
  },
];

export default sliderData;
