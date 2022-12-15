const styles = {
  boxWidth: 'xl:max-w-[1370px] w-full',

  heading: 'font-semibold xs:text-[3.5rem] text-[3rem] text-black',
  paragraph: 'text-black text-[1.25rem]',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',

  paddingX: 'sm:px-12 px-6',
  paddingY: 'sm:py-12 py-6',
  padding: 'sm:px-12 px-6 sm:py-10 py-4',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',
  sectionMargin: 'sm:py-[14rem] py-[8rem]',

  button:
    'inline-flex text-[1.25rem] bg-secondary w-max mx-auto my-[3rem] p-[1rem] rounded-lg items-center text-white font-medium hover:bg-primaryDark',
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
