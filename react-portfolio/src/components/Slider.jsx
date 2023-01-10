import { useState } from 'react';

import BtnSlider from './BtnSlider';
import sliderData from './sliderData';

import GitHub from './Social/GitHubAltIcon';
import Visit from './Social/VisitIcon';

import styles from '../style';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== sliderData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === sliderData.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(sliderData.length);
    }
  };

  // ----- Slide location indicator -----

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className='relative grid'>
      {sliderData.map((obj, index) => (
        <div
          key={obj.id}
          className={
            slideIndex === index + 1
              ? 'slide z-[1] opacity-100'
              : 'slide opacity-0'
          }
        >
          <div className='relative m-[1rem] self-center rounded-2xl shadow-2xl sm:m-[2rem]'>
            {/* ----- Slide Image ----- */}

            <img className='rounded-2xl' src={obj.img} alt='' />

            {/* ----- Slide dots ----- */}

            <div className='absolute bottom-[-2.5rem] right-1/2 flex w-full translate-x-2/4 justify-center'>
              {Array.from({ length: sliderData.length }).map((item, index) => (
                <div
                  key={index}
                  onClick={() => moveDot(index + 1)}
                  className={
                    slideIndex === index + 1
                      ? `${styles.dot} bg-primary`
                      : `${styles.dot} bg-neutral-300`
                  }
                ></div>
              ))}
            </div>
          </div>

          {/* ----- Slide Text ----- */}

          <div className='self-center'>
            <h3 className='relative col-span-2 row-span-1 mb-[2rem] ml-[1rem] w-max text-[1.25rem] font-semibold text-black underline decoration-[.2rem] underline-offset-8 dark:text-black sm:text-[1.5rem] md:ml-[2rem]'>
              {obj.title}
            </h3>
            <p className='col-span-2 row-span-1 mx-[1rem] mb-[2rem] text-[1.05rem] font-medium text-black dark:text-lightAccent sm:text-[1.2rem] md:m-[2rem]'>
              {obj.about}
            </p>

            {/* ----- Slide Icons ----- */}

            <div className='ml-[1rem] md:ml-[2rem]'>
              <div className='flex items-center pb-[.5rem]'>
                <a
                  className='h-[full] w-[full] fill-black hover:fill-primaryDark hover:text-primaryDark dark:fill-black dark:hover:fill-primary dark:hover:text-primary'
                  href={obj.git}
                  target='_blank'
                  rel='noreferrer'
                  title='Github Code'
                >
                  <GitHub />
                  <p className='ml-[.75rem] inline font-semibold'>
                    View the code
                  </p>
                </a>
              </div>
              <div className='flex items-center'>
                <a
                  className='h-[full] w-[full] fill-black hover:fill-primaryDark hover:text-primaryDark dark:fill-black dark:hover:fill-primary dark:hover:text-primary'
                  href={obj.url}
                  target='_blank'
                  rel='noreferrer'
                  title='Live Project'
                >
                  <Visit />
                  <p className='ml-[.75rem] inline font-semibold'>
                    See it live
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ----- Slide Arrows ----- */}

      <BtnSlider moveSlide={prevSlide} direction={'prev'} />
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
    </div>
  );
};

export default Slider;
