const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <footer className='w-full select-none py-[2rem]'>
      <div className='relative py-[2rem]'>
        <div className='grid grid-cols-2'>
          {/* ----- Footer Text ----- */}

          <div className='relative'>
            <h1 className='mb-[.25rem] text-[3rem] font-semibold text-white'>
              Ocean
            </h1>
            <span className='absolute bottom-[-8px] border-t-[3px] border-solid border-white text-[.9rem] text-white'>
              Front-End Web Developer
            </span>
          </div>

          {/* ----- Footer Nav Links ----- */}

          <ul className='flex flex-row items-end gap-[4.5rem]'>
            <li>
              <a
                href='#skills'
                className='footerLink relative w-max text-[1.25rem] hover:text-white '
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href='#portfolio'
                className='footerLink relative w-max text-[1.25rem] hover:text-white '
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='footerLink relative w-max text-[1.25rem] hover:text-white '
              >
                Contact Me
              </a>
            </li>
          </ul>

          <p className='mt-[1rem] text-left'>
            &#169; {currentYear} Ocean Abernathy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
