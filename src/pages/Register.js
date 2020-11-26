import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiLockAlt, BiUser } from 'react-icons/bi';
import { GoMail } from 'react-icons/go';
import { useMutation, gql } from '@apollo/client';

import InputField from '../components/InputField';

const Register = props => {
  const [fields, setFields] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [register, { loading }] = useMutation(REGISTER, {
    onCompleted: _ => props.history.push('/login'),
    onError: e => setErrors(e.graphQLErrors[0].extensions.errors),
  });

  const onRegisterSubmit = e => {
    e.preventDefault();
    register({ variables: { ...fields } });
    setFields({ username: '', email: '', password: '', confirmPassword: '' });
  };
  return (
    <div className='w-80 mx-auto text-gray-100'>
      <h1 className='text-center text-3xl'>Create an account!</h1>
      <form
        className='flex flex-col bg-gray-100 rounded-md p-4 relative pb-8 mt-10'
        autoComplete='off'
        onSubmit={onRegisterSubmit}
      >
        <InputField
          id='username'
          type='text'
          placeholder={errors.username ?? 'Username'}
          value={fields.username}
          onChange={e => setFields({ ...fields, username: e.target.value })}
          error={errors.username}
        >
          <BiUser />
        </InputField>
        <InputField
          id='email'
          type='email'
          placeholder={errors.email ?? 'Email'}
          value={fields.email}
          onChange={e => setFields({ ...fields, email: e.target.value })}
          error={errors.email}
        >
          <GoMail />
        </InputField>
        <InputField
          id='password'
          type='password'
          placeholder={errors.password ?? 'Password'}
          value={fields.password}
          onChange={e => setFields({ ...fields, password: e.target.value })}
          error={errors.password}
        >
          <BiLockAlt />
        </InputField>
        <InputField
          id='confirmPassword'
          type='password'
          placeholder={errors.confirmPassword ?? 'Confirm Password'}
          value={fields.confirmPassword}
          onChange={e =>
            setFields({ ...fields, confirmPassword: e.target.value })
          }
          error={errors.confirmPassword}
        >
          <BiLockAlt />
        </InputField>
        <button
          type='submit'
          className='bg-gradient-to-r from-red-500 to-yellow-500 w-52 uppercase 
          text-sm py-2 absolute -bottom-4 left-0 right-0 mx-auto rounded shadow-xl'
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Create'}
        </button>
      </form>
      <p className='my-10 text-sm text-center'>
        Already have an account? <Link to='/login'>Login</Link>
      </p>
    </div>
  );
};

const REGISTER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      username
      email
    }
  }
`;

export default Register;
