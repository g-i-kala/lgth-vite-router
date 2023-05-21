import React from 'react';
import { brands_links } from '../constants';

const Brands = () => {

  const BrandLink = ({link, img, title}) => (
    <div className='w-14 mx-2 sm:w-16 sm:mx-4 md:w-16 md:mx-6'> 
          <a href={link} target='_blank' rel="noopener noreferrer">
          <img src={img} alt={title}/></a>
    </div>
  );

  return (
    <div id='brands' className='flex justify-center flex-row mt-8 mb-2 bg-color05'>
      {brands_links.map((brand, idx) => (
        <BrandLink key={idx} {...brand}/> 
      )
      )}
    </div>
  )
}

export default Brands