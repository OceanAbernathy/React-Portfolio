import ArrowLeft from '../assets/Icons/ArrowLeft';
import ArrowRight from '../assets/Icons/ArrowRight';

export default function BtnSlider({ direction, moveSlide }) {
  if (direction === 'prev') {
    return (
      <button
        onClick={moveSlide}
        className='absolute top-[50%] left-[-3rem] mx-[.5rem] translate-y-[-50%] cursor-pointer duration-[.3s]'
      >
        <ArrowLeft />
      </button>
    );
  }
  return (
    <button
      onClick={moveSlide}
      className='absolute top-[50%] right-[-3rem] mx-[.5rem] translate-y-[-50%] cursor-pointer duration-[.3s]'
    >
      <ArrowRight />
    </button>
  );
}
