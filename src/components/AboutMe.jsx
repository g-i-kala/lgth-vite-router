import React from 'react';
import { about_me } from '../constants';
import {AboutMeDetails, Feedback} from './';
import styles from '../styles';

const AboutMe = () => {

  const itemIds = ['content','iko_review'];
  const [aboutMe, ikoReviews] = itemIds.map(itemId => about_me.find(item => item.id === itemId));

  return (
    <section id='aboutme' className={`${styles.paddingY}`}>
      <h1 className={styles.heading1}>{aboutMe.heading}</h1>
      <AboutMeDetails id='content'/>
      <Feedback/>
      <p className='text-center text-sm mt-8'>
        {ikoReviews.txt}
        <a href={ikoReviews.link} target="_blank" rel="noopener noreferrer" className='text-color01'>{ikoReviews.link_text}.</a> 
      </p>
    </section>
  )
}

export default AboutMe