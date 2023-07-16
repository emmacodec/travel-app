import React, {useState} from 'react';
import {BsArrowLeftSquareFill, BsArrowRightSquareFill} from 'react-icons/bs';


 const sliderData = [
  {
    url:  'https://images.unsplash.com/photo-1686706763783-1378f598d8c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
  },

  {
    url:  'https://images.unsplash.com/photo-1685917739332-8c75f040eb9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
  },

  {
    url: 'https://images.unsplash.com/photo-1688284998940-d299830fe2bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
  },

]

const WatchOut = () => {

const [slide, setSlide] = useState(0);

const length = sliderData.length;

const prevSlide = () => {
  setSlide(slide === length - 1 ? 0 : slide + 1);
};

const nextSlide = () => {
  setSlide(slide === 0 ? length - 1 : slide - 1);
};

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
      <BsArrowLeftSquareFill
      onClick={prevSlide}
      className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'
      />

      <BsArrowRightSquareFill
      onClick={nextSlide}
      className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'
      />
      
      {sliderData.map((item, index) =>{
        return (
          <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
            <img className='w-full h-full rounded-md' src={item.url} alt='/'  />
          </div>
        )
      })}
    </div>
  );
};

export default WatchOut;
