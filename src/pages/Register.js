import React from 'react';
import { Link } from 'react-router-dom';
import { BiLockAlt, BiUser } from 'react-icons/bi';
import { GoMail } from 'react-icons/go';
import InputField from '../components/InputField';

const Register = () => {
  return (
    <div className='w-80 mx-auto text-gray-100'>
      <h1 className='text-center text-3xl'>Create an account!</h1>
      <form
        className='flex flex-col bg-gray-100 rounded-md p-4 relative pb-8 mt-10'
        autoComplete='off'
      >
        <InputField id='username' type='text' placeholder='Username'>
          <BiUser />
        </InputField>
        <InputField id='email' type='email' placeholder='Email'>
          <GoMail />
        </InputField>
        <InputField id='password' type='password' placeholder='Password'>
          <BiLockAlt />
        </InputField>
        <InputField
          id='confirmPassword'
          type='password'
          placeholder='Confirm password'
        >
          <BiLockAlt />
        </InputField>
        <button
          type='submit'
          className='bg-gradient-to-r from-red-500 to-yellow-500 w-52 uppercase 
          text-sm py-2 absolute -bottom-4 left-0 right-0 mx-auto rounded shadow-xl'
        >
          Create
        </button>
      </form>
      <p className='my-10 text-sm text-center'>
        Already have an account? <Link to='/login'>Login</Link>
      </p>
    </div>
  );
};

export default Register;
