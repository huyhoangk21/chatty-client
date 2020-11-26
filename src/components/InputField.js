import React from 'react';

const InputField = ({ children, error, ...otherProps }) => {
  return (
    <div className='relative text-gray-400 focus-within:text-gray-800'>
      <label
        htmlFor={otherProps.id}
        className='flex items-center absolute top-5'
      >
        {children}
      </label>
      <input
        {...otherProps}
        className={`w-full bg-transparent pl-8 pr-4 py-4 text-gray-800 focus:outline-none ${
          error && 'placeholder-red-600'
        }`}
      />
    </div>
  );
};

export default InputField;
