import styles from '../style';

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <footer
      className={`${styles.boxWidth} mx-auto w-[90%] select-none pb-[7rem] sm:py-[2rem] xl:w-full xl:px-[5rem]`}
    >
      <div className='relative pb-[1rem] md:py-[2rem]'>
        <div className='grid gap-[1rem] ss:grid-cols-2 ss:gap-0'>
          {/* ----- Footer Header ----- */}

          <div className='relative'>
            <h1 className='text-[2rem] font-semibold text-white sm:mb-[.25rem] sm:text-[3rem]'>
              Ocean
            </h1>
            <span className='block text-[.9rem] font-semibold text-secondary dark:text-secondaryDark sm:absolute sm:bottom-[-8px] sm:border-t-[3px] sm:border-solid sm:border-white'>
              Front-End Web Developer
            </span>
          </div>

          {/* ----- Footer Nav Links ----- */}

          <ul className='flex flex-col items-start gap-[1.3rem] sm:flex-row sm:items-end sm:gap-[4.5rem]'>
            <li>
              <a
                className='footerLink relative w-max text-[1rem] hover:text-white md:text-[1.25rem]'
                href='http://oceanabernathy.com/Ocean_Abernathy_Resume.pdf'
                target='_blank'
                title='Resume'
              >
                Resume
              </a>
            </li>
            <li>
              <a
                className='footerLink relative w-max text-[1rem] hover:text-white md:text-[1.25rem]'
                href='#portfolio'
                title='Portfolio'
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className='footerLink relative w-max whitespace-nowrap text-[1rem] hover:text-white md:text-[1.25rem]'
                href='#contact'
                title='Contact Me'
              >
                Contact Me
              </a>
            </li>
          </ul>

          {/* ----- Footer Copyright ----- */}

          <p className='mt-[1rem] text-center text-[.9rem] ss:text-left sm:text-[1rem]'>
            &#169; {currentYear} Ocean Abernathy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
