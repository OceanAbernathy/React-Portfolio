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

  const logo = document.querySelectorAll('#logo path');

  for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
  }

  return (
    <div className='w-full overflow-hidden bg-backgroundLight bg-hero-pattern dark:bg-backgroundDark dark:bg-hero-pattern-inverted'>
      <Splash />

      <Navbar />

      <div
        id='home'
        className={`${styles.flexCenter} pt-[3rem] lg:pt-[5rem] ${styles.section} mb-[8rem] xxs:px-[2rem] ss:px-[4rem] sm:px-[4rem] md:mb-[7rem] lg:px-[5rem]`}
      >
        <Hero />
      </div>

      <div
        className={`wavyContainer relative z-[1] mt-[5rem] h-full w-full duration-[.6s]`}
      >
        <div
          id='portfolio'
          className={`${styles.flexStart} ${styles.boxWidth} mx-auto w-[80%] pb-[3rem] lg:w-[65%]`}
        >
          <Portfolio />
        </div>

        <div
          id='contact'
          className={`${styles.flexStart} ${styles.section} mt-[5rem]`}
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
