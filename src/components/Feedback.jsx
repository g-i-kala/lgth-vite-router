import React from 'react';
import ImageSlider from './ImageSlider';
import {feedback_slides} from '../constants';
import styles from '../styles';


const Feedback = () => {

  const slides = feedback_slides;

  return (
    <div id='feedback'>
      <h1 className={styles.heading2}>Feedback</h1>
      <div className='w-4/5 h-[380px] my-0 mx-auto'>
        <ImageSlider slides={slides} parentWidth={645}/>
      </div>
    </div>
  )
}

export default Feedback