import { useState, useEffect } from 'react';

import Social from './Social/Social';
import Blob from './Blob';

import * as Unicons from '@iconscout/react-unicons';

import styles from '../style';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  // ----- Scroll Up Button Handler -----
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY >= 450);
    });
  }, []);

  return (
    <div className={`${styles.marginHero} select-none`}>
      {/* ----- Social Icons ----- */}

      <div className={`relative flex justify-center`}>
        <div className='absolute left-0 bottom-1/2 translate-y-1/2'>
          <Social />
        </div>

        {/* ----- Hero Image ----- */}

        <Blob />
      </div>

      {/* ----- Hero Heading Text ----- */}

      <div className='flex flex-col text-start sm:text-center'>
        <h1 className='text-[1.5rem] dark:text-white sm:text-[3rem]'>
          Hello, my name is{' '}
          <span className='font-medium text-primary'>Ocean</span>.
        </h1>
        <h2 className='flex place-items-center justify-center pt-5 pb-6 text-[2rem] font-medium text-secondary'>
          <span className='px-2 text-black dark:text-white'>{`{`}</span>
          Front-End Web Developer
          <span className='px-2 text-black dark:text-white'>{`}`}</span>
        </h2>
        <p className='text-[1.15rem] dark:text-white'>
          Passionate about creating a seamless user experience using clean and
          efficient code.
        </p>

        {/* ----- Hero Contact Button ----- */}

        <a href='#contact' className={`${styles.button} group`}>
          Contact Me{' '}
          <Unicons.UilMessage className='ml-[.55rem] h-[20px] w-[20px] duration-300 group-hover:translate-x-1' />
        </a>
      </div>

      {/* ----- Hero Scroll Down Button ----- */}

      <div className='mt-[-4.5rem] mr-[6rem] duration-[.2s] hover:translate-y-1'>
        <a
          href='#portfolio'
          className='ml-auto flex w-fit animate-bounceDown items-center'
        >
          <Unicons.UilMouseAlt className='h-[20px] w-[20px] dark:fill-white' />
          <span className='mx-3 text-[1rem] dark:text-white'>Scroll down</span>
          <Unicons.UilArrowDown className='h-[20px] w-[20px] dark:fill-white' />
        </a>
      </div>

      {/* ----- Scroll Up Button ----- */}

      <a
        href='#home'
        className={`${
          scrolled
            ? 'bottom-[5rem] delay-[.5s] duration-[.7s]'
            : 'bottom-[-20%]'
        } fixed right-[5rem] z-[2] animate-bounceUp rounded-[.4rem] bg-primary py-[.3rem] px-[.5rem] opacity-[.8] duration-[.2s] hover:bottom-[5.5rem] hover:bg-secondary`}
      >
        <Unicons.UilArrowUp className='h-[30px] w-[30px] fill-white' />
      </a>
    </div>
  );
};

export default Hero;
