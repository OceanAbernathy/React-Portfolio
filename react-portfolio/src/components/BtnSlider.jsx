import ArrowLeft from './Social/ArrowLeft';
import ArrowRight from './Social/ArrowRight';

export default function BtnSlider({ direction, moveSlide }) {
  if (direction === 'prev') {
    return (
      <button
        onClick={moveSlide}
        className='absolute top-0 left-[-2rem] mx-0 mt-[50%] translate-y-[-50%] cursor-pointer duration-[.3s] sm:left-[-3rem] sm:top-[50%] sm:mx-[.5rem] sm:mt-0'
        title='Previous'
      >
        <ArrowLeft />
      </button>
    );
  }
  return (
    <button
      onClick={moveSlide}
      className='absolute top-0 right-[-2rem] mx-0 mt-[50%] translate-y-[-50%] cursor-pointer duration-[.3s] sm:right-[-3rem] sm:top-[50%] sm:mx-[.5rem] sm:mt-0'
      title='Next'
    >
      <ArrowRight />
    </button>
  );
}
