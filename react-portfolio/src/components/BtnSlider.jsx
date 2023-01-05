import ArrowLeft from '../assets/Icons/ArrowLeft';
import ArrowRight from '../assets/Icons/ArrowRight';

export default function BtnSlider({ direction, moveSlide }) {
  if (direction === 'prev') {
    return (
      <button
        onClick={moveSlide}
        className='absolute top-0 left-[-2rem] mx-0 mt-[50%] translate-y-[-50%] cursor-pointer duration-[.3s] sm:left-[-3rem] sm:top-[50%] sm:mx-[.5rem] sm:mt-0'
      >
        <ArrowLeft />
      </button>
    );
  }
  return (
    <button
      onClick={moveSlide}
      className='absolute top-0 right-[-2rem] mx-0 mt-[50%] translate-y-[-50%] cursor-pointer duration-[.3s] sm:right-[-3rem] sm:top-[50%] sm:mx-[.5rem] sm:mt-0'
    >
      <ArrowRight />
    </button>
  );
}
