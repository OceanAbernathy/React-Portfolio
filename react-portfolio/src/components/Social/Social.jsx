import LinkedIn from '../Social/LinkedInIcon';
import GitHub from '../Social/GitHubIcon';
import Message from '../Social/MessageIcon';

const Social = () => (
  <div className='grid gap-y-[2rem]'>
    <a
      className='block h-[28px] w-[28px] sm:h-[35px] sm:w-[35px]'
      href='https://www.linkedin.com/in/ocean-abernathy/'
      target='_blank'
      title='LinkedIn'
    >
      <LinkedIn />
    </a>
    <a
      className='block h-[28px] w-[28px] sm:h-[35px] sm:w-[35px]'
      href='https://github.com/OceanAbernathy'
      target='_blank'
      title='Github'
    >
      <GitHub />
    </a>
    <a
      className='block h-[28px] w-[28px] sm:h-[35px] sm:w-[35px]'
      href='#contact'
      target='_self'
      title='Contact Me'
    >
      <Message />
    </a>
  </div>
);

export default Social;
