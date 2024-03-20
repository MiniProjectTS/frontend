import React from 'react'

export default function ({ imageUrl,alt , title, description, className }) {
  return (
    <div className={` h-auto shadow-2xl md:my-10 flex flex-wrap flex-col items-center rounded-2xl p-3 py-10 ${className}`}>
        <img className='h-24 object-contain' src={imageUrl} alt={alt}/>
        <p className='text-center font-PrimaryFont text-lg font-semibold'>{title}</p>
        <p className='text-center font-PrimaryFont'>{description}</p>
    </div>
  )
}
