import styles from '../style';

const Skills = () => {
  return (
    <div className={`${styles.flexCenter} flex-col`}>
      <div className='w-full text-center'>
        <h2 className={`${styles.heading} leading-[5rem]`}>Skills</h2>
        <p className={`${styles.paragraph}`}>My technical level</p>
      </div>

      <div className='mt-[4rem] flex gap-[10rem] text-center'>
        <div>
          <p className='text-[2.5rem] font-semibold text-primaryDark'>03+</p>
          <p className='text-[.9rem]'>
            Years <br /> experience
          </p>
        </div>
        <div>
          <p className='text-[2.5rem] font-semibold text-primaryDark'>10+</p>
          <p className='text-[.9rem]'>
            Completed <br /> projects
          </p>
        </div>
        <div>
          <p className='text-[2.5rem] font-semibold text-primaryDark'>03+</p>
          <p className='text-[.9rem]'>
            Courses <br /> completed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
