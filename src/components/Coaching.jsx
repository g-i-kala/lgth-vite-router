import React from 'react';
import styles from '../styles';
import { CoachingOption, CoachingDetails} from './';


const Coaching = () => (
    <section id='coaching' className={`flex flex-col ${styles.paddingY}`}>
      <CoachingOption id='zerotohero'/>
      <CoachingOption id='coaching' reverse={true}/>
        <div id='coaching_details' className='ss:grid ss:grid-cols-2 sm:grid-cols-3 '>
          <CoachingDetails id='zerotohero'/>
          <CoachingDetails id='coaching_at_the_spot'/>
          <CoachingDetails id='coaching_online'/>
        </div>
    
    </section>
  )

export default Coaching