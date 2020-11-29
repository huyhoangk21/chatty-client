import React from 'react';
import { BiArrowBack } from 'react-icons/bi';

const Header = () => {
  return (
    <div className='fixed top-0 h-16 w-full flex items-center justify-center z-10 bg-gray-100'>
      <button type='button'>
        <BiArrowBack className='absolute left-5 top-0 bottom-0 my-auto text-2xl text-red-500' />
      </button>
      <h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-t from-red-500 to-yellow-500'>
        Chatty
      </h1>
    </div>
  );
};

export default Header;
