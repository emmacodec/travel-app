import React from 'react'

const SelectCard = (props) => {
  return (
    <div className='relative'>
    <img src={props.bg} alt='/' className='object-cover w-full h-full' />
    <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl text-white font-bold absolute'>
            {props.text}
            </p>
    </div>
  </div>
      
    
  )
}

export default SelectCard;
