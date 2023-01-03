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
    <div className=' z-[-1] w-full overflow-hidden bg-backgroundLight bg-hero-pattern px-[1.75rem] dark:bg-backgroundDark dark:bg-hero-pattern-inverted sm:px-0'>
      <div className='splash fixed flex h-[100vh] w-full place-items-center justify-center bg-black'>
        <Splash />
      </div>

      <div className={`${styles.flexCenter}`}>
        <Navbar />
      </div>

      <div
        id='home'
        className={`${styles.flexCenter} pt-[5rem] ${styles.section} mb-[5rem]`}
      >
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div
        className={`${
          scrolled ? '' : 'translate-y-[150px]'
        } wavyContainer relative z-[1] h-full w-full pt-[8rem] duration-[.6s] sm:pt-[5rem]`}
      >
        <div
          id='portfolio'
          className={`${styles.flexStart} ${styles.section} pt-[6rem]`}
        >
          <div className={`${styles.boxWidth}`}>
            <Portfolio />
          </div>
        </div>

        <div
          id='contact'
          className={`${styles.flexStart} pt-[6rem] ${styles.section}`}
        >
          <div className={`${styles.boxWidth}`}>
            <Contact />
          </div>
        </div>

        <div
          className={`${styles.flexStart} ${styles.sectionMargin} flex-col md:flex-row`}
        >
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
