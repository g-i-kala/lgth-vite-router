import { coaching } from '../constants';

const CoachingOption = ({ id, reverse }) => {
  
  const coachingOption = coaching.find(item=>item.id === id);
  
  return (
    <div className={`sm:flex ${reverse ? 'flex-row-reverse' : ''}  my-2 sm:my-4`}>
      <div className='my-auto w-full sm:w-1/2 md:w-2/5'>
        <img src={coachingOption.img} alt={coaching.img_alt}/>
      </div>
      <div className='flex flex-col justify-center sm:w-1/2 md:w-3/5 mx-0 sm:mx-6 md:mx-8 text-sm'>
        <p className=' my-1 sm:my-2'>{coachingOption.subtitle}</p>
        <h1 className='font-poppins_semibold tracking-wider text-lg mb-1 sm:mb-2'>{coachingOption.title}</h1>
        <p className=''>{coachingOption.content}</p>
        <a href='#coaching_details' className='text-xs text-color02 mt-1 sm:mt-2'>more..</a>
      </div>  
      
    </div>
  )}

export default CoachingOption