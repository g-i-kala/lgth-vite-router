import React from 'react';
import styles from '../styles';
import { homework } from '../constants';
import HomeworkTable from './HomeworkTable';

const Homework = () => {

  const itemIds = ['title','importante','thanks_college'];
  const [homeworkTitle, homeworkImportante, homeworkThanks] = itemIds.map(itemId => homework.find(item => item.id === itemId));

  return (
    <section id='homework' className={`flex flex-col ${styles.paddingY}`}>
      <h1 className={styles.heading1}>{homeworkTitle.title}</h1>
      <p className='text-center text-md mb-4'>{homeworkTitle.txt}</p>
        <div className='ss:grid ss:grid-cols-2 sm:grid-cols-3 '>
          <HomeworkTable id='table_beginner'/>
          <HomeworkTable id='table_intermediate'/>
          <HomeworkTable id='table_advanced'/>
        </div>
        <div className='text-center py-4 md:py-6 '>
          <p className='text-md mb-4'>
            {homeworkImportante.title}
          </p>
          <a href={homeworkImportante.link} target="_blank" rel="noopener noreferrer" className='border-solid border-2 border-green-600 py-2 px-8 m-2 text-green-600'>{homeworkImportante.button}
          </a>
        </div>
        <div className='text-center'>
          <p className='text-md mb-4'>
            {homeworkThanks.txt}</p>
          <a href={homeworkThanks.link} target="_blank" rel="noopener noreferrer" className='text-sm text-color02'>
            Kitesurf College YouTube page
          </a>
        </div>
    </section>
  )
}

export default Homework