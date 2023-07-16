import React from 'react';

import veegan from '../assets/veegan.png';
import bahamas from '../assets/bahamas.png';
import bahamas2 from '../assets/bahamas2.png';
import detroit from '../assets/detroit.png';
import maldives from '../assets/maldives.png';
import miami from '../assets/miami.png';
import SelectCard from './SelectCard';

const Select = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      
    <SelectCard bg={veegan} text= 'Veegan' />
    <SelectCard bg={bahamas} text= 'Bahamas' />
    <SelectCard bg={bahamas2} text= 'Malaysia' />
    <SelectCard bg={detroit} text= 'Detroit' />
    <SelectCard bg={maldives} text= 'Maldives' />
    <SelectCard bg={miami} text= 'Miami' />

    </div>
  )
}

export default Select;
