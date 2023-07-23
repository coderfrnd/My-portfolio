import React from 'react'
import '../Page/About.css'

const AchievementCard = ({ title, description,link,extra }) => {
    return (
      <div className='rounded-lg p-4'>
      <h3 className=' md:text-2xl text-xl  mt-0 they'>{title}</h3>
      <p className='mt-2 md:text-xl'>{extra}</p>
      <p className='mt-2 md:text-xl'>{description}
      {link && (
        <a href={link} className='text-white  underline m-1 cursor-pointer' target='_blank' rel='noopener noreferrer'>
          here
        </a>
      )}
      
      </p>
     
    </div>
    );
  };

export default AchievementCard;