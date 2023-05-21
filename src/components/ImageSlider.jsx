import React, { useEffect, useRef, useState, useCallback } from 'react';

const ImageSlider = ( {slides} ) => {
  
    const timerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0; 
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex); 
    };
    const goToNext = useCallback(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex +1; 
      setCurrentIndex(newIndex);
    },[currentIndex,slides]);
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
    useEffect(()=> {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      console.log('use effect');
      timerRef.current = setTimeout (()=>{
        goToNext();
      },3000)
      return ()=> clearTimeout(timerRef.current)
    },[goToNext]);

  return (
    <div className='h-full relative text-color02 '>
        <div className='absolute top-1/3 right-full text-3xl hover:opacity-80 cursor-pointer'
              onClick={goToPrevious}
        > &#10094; </div>
        <div className='w-full h-full bg-contain bg-no-repeat' style={{backgroundImage: `url(${slides[currentIndex]})`}}> </div>
        <div className='absolute top-1/3 left-full text-3xl hover:opacity-80 cursor-pointer'
              onClick={goToNext}
        > &#10095; </div>
        
        <div className='flex flex-row justify-center '>
          {
            slides.map((slide, idx)=>
            (
              <div key={idx} className='mx-1 text-2xl hover:opacity-80 cursor-pointer' onClick={()=>goToSlide(idx)}>
                  &#9679; 
              </div>
            )
            )
          }
        </div>
    </div>
  )
}

export default ImageSlider