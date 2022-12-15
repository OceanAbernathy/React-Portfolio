import styles, { layout } from './style';

import { Navbar, Hero, Skills } from './components';

const App = () => (
  <div className='z-[-1] w-full overflow-hidden bg-backgroundLight bg-hero-pattern dark:bg-backgroundDark dark:bg-hero-pattern-inverted'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <Navbar />
    </div>

    <div
      id='home'
      className={`${styles.flexCenter} ${layout.section} mb-[6rem]`}
    >
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div
      className={`${styles.sectionMargin} wavyContainer relative z-[1] h-full w-full`}
    >
      <div id='skills' className={`${styles.flexCenter} ${layout.section}`}>
        <div className={`${styles.boxWidth}`}>
          <Skills />
        </div>
      </div>

      {/* <div className={`${styles.flexStart} ${layout.section}`}>
        <div className={`${styles.boxWidth}`}>
          <Portfolio />
        </div>
      </div>

      <div className={`${styles.flexStart} ${layout.section}`}>
        <div className={`${styles.boxWidth}`}>
          <Contact />
        </div>
      </div>

      <div className={`${styles.flexStart} ${layout.section}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div> */}
    </div>
  </div>
);

export default App;
