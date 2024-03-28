import React from 'react'

function Stepscard({className, title, text}) {
  return (
    <div className={`p-5 border-2 border-dashed rounded-lg drop-shadow-xl ${className}`}> 
       <p className=' flex flex-wrap font-medium text-xl'>{title}</p>
       <p className='flex flex-wrap font-light'>{text}</p>
    </div>
  )
}

export default Stepscard