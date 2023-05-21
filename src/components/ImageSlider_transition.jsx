import React, { useEffect, useRef, useState, useCallback } from 'react';

const slidesContainerStyles = {
  display: "flex",
  height: "100%",
  transition: "transform ease-out 0.3s",
};

const slidesContainerOverflowStyles = {
  overflow: "hidden",
  height: "100%",
};

const ImageSlider = ( {slides, parentWidth} ) => {
  
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

    const getSlidesContainerStylesWithWidth = () => ({
      ...slidesContainerStyles,
      width: parentWidth * slides.length,
      transform: `translateX(${-(currentIndex * parentWidth)}px)`,
    });

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
        <div className='overflow-hidden h-full'>
          <div className='h-full' style={getSlidesContainerStylesWithWidth()}>
            {slides.map((_, slideIndex)=>
              <div key={slideIndex} className='w-full h-full bg-contain bg-no-repeat' style={{backgroundImage: `url(${slides[slideIndex]})`, width: `${parentWidth}px`}}>
              </div>
            )}
          </div>
        </div>
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