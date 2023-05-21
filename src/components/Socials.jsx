import React from 'react'
import { socialMedia } from '../constants';
import { facebook } from '../assets';

const Socials = () => {

  const SocialLink = ({title, icon, link}) => (
    <div className='w-8 sm:w-10 mx-1 sm:mx-2 my-2'> 
          <a href={link} target='_blank' rel="noopener noreferrer">
          <img src={icon} alt={title}/></a>
    </div>
  );

  return (
    <div id='socialMedia' className='flex justify-center flex-row py-1 sm:py-2 bg-color03'>
      {socialMedia.map((social, idx) => (
        <SocialLink key={idx} {...social}/> 
      )
      )}
    </div>
  )
}

export default Socials