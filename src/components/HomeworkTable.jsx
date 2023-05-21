import React from 'react';
import { HomeworkButton} from '../components';
import { homework } from '../constants';

const HomeworkTable = ( {id} ) => {

    const tableSingle = homework.find(item=>item.id===id);

  return (
    <div className="text-center my-auto text-sm p-4" >
        <div className="flex flex-col items-center shadow-md">
            <div className='w-full bg-color03'>
                <h1 className='font-poppins_semibold tracking-wider text-lg my-1 sm:my-2 text-color01'>{tableSingle.title}</h1>
            </div>
            <div className='py-4 md:py-6'>
                {tableSingle.buttons && tableSingle.buttons.map((button) => <HomeworkButton key={button.id} button={button}/>)}
            </div>
        </div>
    </div>
  )
}

export default HomeworkTable