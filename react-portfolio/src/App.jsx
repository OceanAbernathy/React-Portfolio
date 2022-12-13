import styles, { layout } from './style';

import { Navbar, Hero } from './components';

const App = () => (
  <div className='w-full overflow-hidden bg-backgroundLight bg-hero-pattern dark:bg-backgroundDark dark:bg-hero-pattern-inverted'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <Navbar />
    </div>

    <div className={`${styles.flexStart} ${layout.section}`}>
      <div className={`${styles.boxWidth} text-[500px]`}>
        <Hero />
      </div>
    </div>

    {/* <div className={`${styles.flexStart} ${layout.section}`}>
      <div className={`${styles.boxWidth} text-[500px]`}>
        <Skills />
      </div>
    </div> */}

    {/* <div className={`${styles.flexStart} ${layout.section}`}>
      <div className={`${styles.boxWidth} text-[500px]`}>
        <Portfolio />
      </div>
    </div> */}

    {/* <div className={`${styles.flexStart} ${layout.section}`}>
      <div className={`${styles.boxWidth} text-[500px]`}>
        <Contact />
      </div>
    </div> */}

    {/* <div className={`${styles.flexStart} ${layout.section}`}>
      <div className={`${styles.boxWidth} text-[500px]`}>
        <Footer />
      </div>
    </div> */}
  </div>
);

export default App;
