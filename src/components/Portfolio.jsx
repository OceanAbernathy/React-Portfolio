import Slider from './Slider';

import styles from '../style';

const Portfolio = () => (
  <div className='select-none'>
    {/* ----- Portfolio Heading ----- */}

    <h2 className={`text-center ${styles.heading}`}>Portfolio</h2>
    <p className={`mb-[2rem] text-center ${styles.subHeading}`}>
      Most recent work
    </p>

    {/* ----- Project Slider ----- */}

    <div className='mx-auto px-[.5rem]'>
      <Slider />
    </div>
  </div>
);

export default Portfolio;
