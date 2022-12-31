import { useState, useEffect } from 'react';

import { navLinks } from '../constants';

import * as Unicons from '@iconscout/react-unicons';

import styles from '../style';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scroll, setScroll] = useState(false);

  const html = document.querySelector('html');

  // ----- Nav Box Shadow Handler -----

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 80);
    });
  }, []);

  // ----- Dark-Mode Handlers -----

  const buttonSwitch = () => {
    setDarkMode((prev) => !prev);
  };

  const toggleDarkClass = () => {
    darkMode ? html.classList.remove('dark') : html.classList.add('dark');
  };

  const toggleDarkMode = () => {
    buttonSwitch();
    toggleDarkClass();
  };

  return (
    <div
      className={`${
        scroll ? 'shadow-nav dark:shadow-navDark' : 'shadow-none'
      } fixed bottom-0 z-[2] w-full select-none bg-backgroundLightNav px-6 dark:bg-backgroundDarkNav sm:top-0 sm:bottom-auto sm:px-[20rem]`}
    >
      <nav
        className={`${styles.boxWidth} my-0 mx-auto flex justify-end py-4 sm:px-[3rem] sm:py-3`}
      >
        {/* ----- Nav Logo ----- */}

        <a
          href='#home'
          alt='logo'
          className='mr-auto flex text-[1.5rem] font-semibold text-primary hover:text-secondary dark:text-primaryDark dark:hover:text-secondary sm:text-[2.5rem]'
        >
          Ocean
        </a>

        {/* ----- Desktop Nav ----- */}

        <ul className='hidden flex-1 list-none items-center justify-end sm:flex'>
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`relative cursor-pointer text-[1.25rem] sm:text-[1.4rem] ${
                index === navLinks.length - 1 ? 'mr-0' : 'sm:mr-8 md:mr-14 '
              } font-medium text-secondary hover:text-primary dark:hover:text-primaryDark`}
            >
              <a
                className='navLink'
                href={`${nav.id}`}
                target={`${nav.target}`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* ----- Dark-Mode Toggle Buttons ----- */}

        <div
          className='mr-5 ml-0 flex cursor-pointer items-center sm:mr-0 sm:ml-10'
          onClick={() => toggleDarkMode()}
        >
          {darkMode ? (
            <Unicons.UilSun
              size='28'
              color='#f1f36d'
              className='hover:fill-white'
            />
          ) : (
            <Unicons.UilMoon
              size='28'
              color='#555555'
              className='hover:fill-primaryDark'
            />
          )}
        </div>

        {/* ----- Mobile Nav ----- */}

        <div className='flex items-center sm:hidden'>
          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } sidebar absolute bottom-0 left-0 right-0 min-w-[140px] justify-center rounded-t-xl bg-backgroundLight bg-hero-pattern pt-[2.5rem] pb-[2.5rem] shadow-nav dark:bg-backgroundDark dark:bg-hero-pattern-inverted dark:shadow-navDark`}
          >
            <ul className='grid list-none grid-cols-2 gap-y-[3rem] gap-x-[6rem]'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className='cursor-pointer font-poppins text-[16px] font-normal text-secondary'
                >
                  <a href={`#${nav.id}`} className='flex flex-col text-center'>
                    <img
                      src={nav.icon}
                      alt={nav.title}
                      className='my-[0] mx-[auto] h-[32px] w-[32px]'
                    />
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ----- Mobile Nav Open/Close Buttons ----- */}

          <div
            className='w=[28px] z-[1] h-[28px]'
            onClick={() => setToggle((prev) => !prev)}
          >
            {toggle ? (
              <Unicons.UilTimes size='28' color='#737373' />
            ) : (
              <Unicons.UilApps
                size='28'
                className='fill-primary dark:fill-primaryDark'
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
