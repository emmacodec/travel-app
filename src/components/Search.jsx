import React from 'react';
import {RiCustomerService2Fill} from 'react-icons/ri';
import {MdOutlineTravelExplore} from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
            <h2 className='text-4xl'>LUXURY INCLUDED VACATION FOR TWO OR MORE..</h2>
            <p className='py-4 text-xl font-bold'>Come experience the very best of luxury in Veegan Travel Guide for couples at VEEGAN BEACHES.
                Our luxury beach resorts, set along most gorgeous tropical settings and exquisite beaches in
                Maldives, Detroit, and Malaysia; feature unlimited gorgeous dinning, unique bars serving premium
                liquors and wines, and intriguing night life. Including complimentary fees at our golf resorts and
                certified diving at most resorts. If you are planning a wedding, get together, honey-moon, family
                re-union, VEEGAN BEACHES is the leader in the Bahamas...!! 
                </p>
        </div>
      
      
        
      <div className='grid sm:grid-cols-2 gap-8 py-4'>
        <div className='flex flex-col lg:flex-row items-center text-center'>
          <button>
            <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className='py-2'>LEADING SERVICE</h3>
              <p className='py-1 font-medium'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
            </div>

            <div className='flex flex-col lg:flex-row items-center text-center'>
          <button>
            <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className='py-2'>AUTOMATED BOOKINGS</h3>
              <p className='py-1 font-medium'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
            </div>
      </div>
      </div>


      <div>
        <div className='border text-center'>
          <p className='pt-2 font-bold'>GET AN ADDITIONAL 5% OFF</p>
          <p className='py-4 font-bold'>10 HOURS LEFT</p>
          <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-ful'>
          <div className='flex flex-col my-2'>
            <label>Destination</label>
            <select className='border rounded-md p-4'>
              <option>Maldives Resort</option>
              <option>Miami Resort</option>
              <option>Detroit Resort</option>
              <option>Malaysia Resort</option>
            </select>
          </div>
          <div className='flex flex-col my-2'>
            <label>CHECK-IN</label>
            <input className='border rounded-md p-4' type='date' />
          </div>
          
          <div className='flex flex-col my-2'>
            <label>CHECK-OUT</label>
            <input className='border rounded-md p-4' type='date' />
          </div>
          <button className='w-full my-4'>Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
