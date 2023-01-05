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
      setScrolled(window.scrollY >= 250);
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

      <div className='flex flex-col px-[4rem] text-start xxs:px-[.5rem] ss:text-center sm:px-[3.5rem] lg:px-0'>
        <h1 className='text-[1.5rem] dark:text-white xxs:text-[2rem] sm:text-[2.5rem] md:text-[3rem]'>
          Hello, my name is{' '}
          <span className='font-semibold text-primary underline decoration-[3px] underline-offset-[.5rem] ss:font-medium ss:no-underline'>
            Ocean
          </span>
          .
        </h1>
        <h2 className='flex justify-start pt-4 pb-4 text-[1.2rem] font-medium text-secondary ss:justify-center sm:text-[1.5rem] md:pt-[.8rem] md:pb-[1.3rem] md:text-[2rem]'>
          <span className='pr-1 text-black dark:text-white sm:pr-2'>{`{`}</span>
          Front-End Web Developer
          <span className='pl-1 text-black dark:text-white sm:pl-2'>{`}`}</span>
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
          className='ml-auto hidden w-fit animate-bounceDown items-center lg:flex'
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
            ? 'bottom-[7rem] duration-[.2s] md:bottom-[5rem]'
            : 'bottom-[-20%]'
        } fixed right-[1rem] z-[2] animate-bounceUp rounded-[.4rem] bg-primary py-[.3rem] px-[.5rem] opacity-[.8] hover:bottom-[7.5rem] hover:bg-secondary md:right-[5rem] md:hover:bottom-[5.5rem]`}
      >
        <Unicons.UilArrowUp className='h-[30px] w-[30px] fill-white' />
      </a>
    </div>
  );
};

export default Hero;
