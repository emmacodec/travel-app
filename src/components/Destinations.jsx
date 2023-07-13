import React from 'react'


import bahamas from '../assets/bahamas.png';
import bahamas2 from '../assets/bahamas2.png';
import detroit from '../assets/detroit.png';
import maldives from '../assets/maldives.png';
import miami from '../assets/miami.png';


const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1 className='text-3xl font-bold'>All-inclusive Resorts</h1>
      <p className='py-4 text-xl font-bold'>On the World's best Beaches</p>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={bahamas} alt='/' />
        <img className='w-full h-full object-cover' src={bahamas2} alt='/' />
        <img className='w-full h-full object-cover' src={detroit} alt='/' />
        <img className='w-full h-full object-cover' src={maldives} alt='/' />
        <img className='w-full h-full object-cover' src={miami} alt='/' />
        </div>
    </div>
  )
}

export default Destinations;
