export default Blob = () => (
  <svg
    className='m-[2rem] w-[235px] sm:m-[2rem] sm:w-[350px]'
    viewBox='0 0 130 130'
    xmlns='http://www.w3.org/2000/svg'
  >
    <mask id='mask0' mask-type='alpha'>
      <path
        d='M115.5,52.8c8.3,24,7.9,52.4-7.5,64.6s-45.7,8.1-67.6-7.8S4.9,66.1,11.7,44.2C18.6,22.3,45.8,6.1,67.9,7.7
                                        C90.1,9.4,107.2,28.9,115.5,52.8z'
      />
    </mask>
    <g mask='url(#mask0)'>
      <path
        className='fill-primary'
        d='M115.5,52.8c8.3,24,7.9,52.4-7.5,64.6s-45.7,8.1-67.6-7.8S4.9,66.1,11.7,44.2C18.6,22.3,45.8,6.1,67.9,7.7
                                        C90.1,9.4,107.2,28.9,115.5,52.8z'
      />
      <image
        className='w-[115px]'
        x='12'
        y='12'
        href='./grayscale-portrait-updated-removebg.png'
      />
    </g>
  </svg>
);
