const styles = {
  boxWidth: 'xl:max-w-[1370px] w-full',

  heading2:
    'font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full',
  paragraph: 'font-normal text-dimWhite text-[18px] leading-[30.8px]',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',

  paddingX: 'sm:px-12 px-6',
  paddingY: 'sm:py-12 py-6',
  padding: 'sm:px-12 px-6 sm:py-10 py-4',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',

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
