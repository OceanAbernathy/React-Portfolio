import { useState, useEffect } from 'react';

import { Splash, Navbar, Hero, Portfolio, Contact, Footer } from './components';

import styles from './style';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY >= 250);
    });
  }, []);

  return (
    <div className='z-[-1] w-full overflow-hidden bg-backgroundLight bg-hero-pattern dark:bg-backgroundDark dark:bg-hero-pattern-inverted'>
      <Splash />

      <Navbar />

      <div
        id='home'
        className={`${styles.flexCenter} pt-[3rem] lg:pt-[5rem] ${styles.section} mb-[5rem] xxs:px-[2rem] ss:px-[4rem] sm:px-[4rem] lg:px-[5rem]`}
      >
        <Hero />
      </div>

      <div
        className={`wavyContainer relative z-[1] h-full w-full pt-[8rem] duration-[.6s] sm:pt-[5rem]`}
      >
        <div
          id='portfolio'
          className={`${styles.flexStart} ${styles.boxWidth} mx-auto w-[80%] pb-[3rem] pt-[8rem] lg:w-[65%]`}
        >
          <Portfolio />
        </div>

        <div
          id='contact'
          className={`${styles.flexStart} pt-[8rem] ss:pt-[10rem] ${styles.section}`}
        >
          <Contact />
        </div>

        <div
          className={`${styles.flexStart} ${styles.sectionMargin} flex-col md:flex-row`}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
