import emailjs from 'emailjs-com';

import * as Unicons from '@iconscout/react-unicons';

import styles from '../style';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hhdu2as',
        'template_6xt8645',
        e.target,
        'fMA2LelDCh11pRdB2'
      )
      .then(
        (result) => {
          alert('Message Sent!');
          console.log(result.text);
        },
        (error) => {
          alert('Send Error!');
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      className={`${styles.boxWidth} mx-[0rem] w-[100%] lg:mx-[5rem] xl:mx-auto xl:w-[75%]`}
    >
      {/* ----- Contact Heading ----- */}

      <h2 className={`select-none text-center ${styles.heading}`}>
        Contact Me
      </h2>
      <p className={`select-none pb-[1.5rem] text-center ${styles.subHeading}`}>
        Get in touch
      </p>

      <div className='mx-[1.5rem] mt-[4rem] grid grid-cols-1 gap-[1.5rem] px-[1rem] sm:grid-cols-2 sm:px-[5rem]'>
        <div>
          {/* ----- Contact Information ----- */}

          <div className='mb-[2rem] flex'>
            <Unicons.UilPhone className='my-auto mr-[1rem] h-[35px] w-[35px] fill-secondary dark:fill-secondaryDark' />

            <div>
              <h3 className='select-none text-[1.25rem] font-medium md:text-[1.5rem]'>
                Call Me
              </h3>
              <span className='text-[.9rem] text-white md:text-[1rem]'>
                314-659-7788
              </span>
            </div>
          </div>

          <div className='mb-[2rem] flex'>
            <Unicons.UilEnvelope className='my-auto mr-[1rem] h-[35px] w-[35px] fill-secondary dark:fill-secondaryDark' />

            <div>
              <h3 className='select-none text-[1.25rem] font-medium md:text-[1.5rem]'>
                Email
              </h3>
              <span className='text-[.9rem] text-white md:text-[1rem]'>
                ocean.abernathy@gmail.com
              </span>
            </div>
          </div>

          <div className='mb-[2rem] flex'>
            <Unicons.UilMapMarker className='my-auto mr-[1rem] h-[35px] w-[35px] fill-secondary dark:fill-secondaryDark' />

            <div>
              <h3 className='select-none text-[1.25rem] font-medium md:text-[1.5rem]'>
                Location
              </h3>
              <span className='text-[.9rem] text-white md:text-[1rem]'>
                Phoenix, AZ
              </span>
            </div>
          </div>
        </div>

        {/* ----- Contact Form ----- */}

        <form onSubmit={sendEmail} className='grid gap-[1.5rem]'>
          <div className='grid gap-[1.5rem] md:grid-cols-2'>
            <div className='rounded-lg bg-lightAccent px-[1rem] pt-[1.125rem] pb-[.25rem] text-[.9rem]'>
              <label className='select-none'>Name</label>
              <input
                type='text'
                name='name'
                required
                className='w-full resize-none bg-lightAccent pt-[.25rem] pr-[.5rem] pb-[.5rem] text-[1.25rem] text-darkAccent outline-none'
              />
            </div>
            <div className='rounded-lg bg-lightAccent px-[1rem] pt-[1.125rem] pb-[.25rem] text-[.9rem]'>
              <label className='select-none'>Email</label>
              <input
                type='email'
                name='email'
                required
                className='w-full resize-none bg-lightAccent pt-[.25rem] pr-[.5rem] pb-[.5rem] text-[1.25rem] text-darkAccent outline-none'
              />
            </div>
          </div>
          <div className='rounded-lg bg-lightAccent px-[1rem] pt-[1.125rem] pb-[.25rem] text-[.9rem]'>
            <label className='select-none'>Message</label>
            <textarea
              name='message'
              cols='0'
              rows='7'
              required
              className='w-full resize-none bg-lightAccent pt-[.25rem] pr-[.5rem] pb-[.5rem] text-[1.25rem] text-darkAccent outline-none'
            ></textarea>
          </div>

          {/* ----- Contact Send Button ----- */}

          <button
            className={`${styles.buttonContact} group`}
            type='submit'
            title='Send Message'
          >
            Send Message{' '}
            <Unicons.UilMessage className='ml-[.55rem] inline h-[20px] w-[20px] duration-300 group-hover:translate-x-1' />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
