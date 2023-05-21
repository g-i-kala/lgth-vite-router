import { about_me } from "../constants";

const AboutMeDetails = ({ id }) => {

  const aboutmeContent = about_me.find(item=>item.id === id);
  
  return (
    <div className={`sm:flex my-2 sm:my-4`}>
      <div className='my-6 sm:my-auto w-full sm:w-1/2 md:w-2/5'>
        <img src={aboutmeContent.img} alt={aboutmeContent.img_alt}/>
      </div>
      <div className='flex flex-col justify-center sm:w-1/2 md:w-3/5 mx-0 sm:mx-6 md:mx-8 text-sm'>
        <h1 className='font-poppins_semibold tracking-wider text-lg mb-1 sm:mb-2'>{aboutmeContent.title}</h1>
        <p className='py-2 sm:py-6'>{aboutmeContent.txt1}</p>
        <p className=''>{aboutmeContent.txt2}</p>
        <a href='#feedback' className='text-xs text-color02 mt-1 sm:mt-2'>Feedback</a>
      </div>  
      
    </div>
  )}

export default AboutMeDetails