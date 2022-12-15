import styles from '../style';

import Blob from './Blob';

import { navSocial } from '../constants';

import * as Unicons from '@iconscout/react-unicons';

const Hero = () => {
  function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) {
      scrollUp.classList.add('show-scroll');
    } else {
      scrollUp.classList.remove('show-scroll');
    }
  }
  window.addEventListener('scroll', scrollUp);

  return (
    <div className={`${styles.marginY}`}>
      {/* ----- Social Icons ----- */}

      <div className={`relative flex justify-center`}>
        <div className='absolute left-0 bottom-1/2 grid translate-y-1/2 gap-y-[2rem]'>
          {navSocial.map((nav, index) => (
            <a key={nav.id} href={`#${nav.href}`} target='_blank'>
              <img
                src={nav.icon}
                alt={nav.title}
                className='h-[35px] w-[35px] fill-white'
              />
            </a>
          ))}
        </div>

        {/* ----- Hero Image ----- */}

        <Blob />
      </div>

      {/* ----- Hero Text ----- */}

      <div className='flex flex-col text-center'>
        <p className='font-mono text-[2.5rem] dark:text-white'>
          Hello, my name is <span className='home__title__span'>Ocean</span>.
        </p>
        <h2 className='py-5 text-[2rem] font-medium text-secondary'>
          Front-End Web Developer
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
          href='#skills'
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
        id='scroll-up'
        className='fixed bottom-[-20%] right-[5rem] z-[2] animate-bounceUp rounded-[.4rem] bg-primary py-[.3rem] px-[.5rem] opacity-[.8] duration-[.2s] hover:bottom-[5.5rem] hover:bg-secondary'
      >
        <Unicons.UilArrowUp className='h-[30px] w-[30px] fill-white' />
      </a>
    </div>
  );
};

export default Hero;
