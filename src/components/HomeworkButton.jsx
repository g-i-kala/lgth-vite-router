import React from 'react'

const HomeworkButton = ( {button} ) => {

  return (
    <div className='border-solid border-2 border-color02 py-2 px-8 m-2 '>
      <a href={button.link} target="_blank" rel="noopener noreferrer" className='text-color02'>
        {button.title}
      </a>
    </div>
  )
};

export default HomeworkButton