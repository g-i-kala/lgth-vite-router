import React, { useState } from 'react'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const handleOnClick = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  };
  
  window.addEventListener('scroll', handleScroll);

  return (
    <button className={`fixed bottom-4 right-4 p-2 bg-color02 text-color05 rounded-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} onClick={handleOnClick}>
      <div className='rotate-90'>&#10096;
      &#10096;</div>

    </button>
  )
}

export default ScrollToTopButton