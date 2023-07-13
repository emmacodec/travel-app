import React from 'react';
import {RiCustomerService2Fill} from 'react-icons/ri';
import {MdOutlineTravelExplore} from 'react-icons/md';

const Search = () => {
  return (
    <div className='maw-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
            <h2>LUXURY INCLUDED VACATION FOR TWO OR MORE..</h2>
            <p className='py-4'>Come experience the very best of luxury in Veegan Travel Guide for couples at VEEGAN BEACHES.
                Our luxury beach resorts, set along most gorgeous tropical settings and exquisite beaches in
                Maldives, Detroit, and Malaysia; feature unlimited gorgeous dinning, unique bars serving premium
                liquors and wines, and intriguing night life. Including complimentary fees at our golf resorts and
                certified diving at most resorts. If you are planning a wedding, get together, honey-moon, family
                re-union, VEEGAN BEACHES is the leader in the Bahamas...!! </p>
        </div>
      </div>

      <div className='grid sm:grid-cols-2 gap-8 py-2'>
        <div className='flex flex-col lg:flex-row items-center text-center'>
          <button>
            <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className='py-2'>LEADING SERVICE</h3>
              <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
            </div>

            <div className='flex flex-col lg:flex-row items-center text-center'>
          <button>
            <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className='py-2'>AUTOMATED BOOKINGS</h3>
              <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
            </div>
        <div></div>
      </div>


      <div></div>
    </div>
  )
}

export default Search;
