const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading1: "font-poppins_semibold text-center text-xl tracking-wider text-color01 mb-4 sm:mb-8",
  heading2: 'font-poppins_semibold text-center text-md tracking-wider text-color01 mb-4 sm:mb-8',
  paragraph: "font-poppins font-normal text-color01 text-4.4 leading-8.4",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "md:px-36 sm:px-20 px-12",
  paddingY: "md:py-20 py-8",
  padding: "md:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;