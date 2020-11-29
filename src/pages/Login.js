import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiLockAlt, BiUser } from 'react-icons/bi';
import { useLazyQuery, gql } from '@apollo/client';
import InputField from '../components/InputField';
import { AuthContextDispatch } from '../contexts/AuthProvider';

const Login = props => {
  const dispatch = useContext(AuthContextDispatch);
  const [fields, setFields] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [login, { loading }] = useLazyQuery(LOGIN, {
    onCompleted: ({ login }) => {
      dispatch({ type: 'LOGIN', payload: login.username });
      props.history.push('/');
    },
    onError: e => setErrors(e.graphQLErrors[0].extensions.errors),
  });

  const onLoginSubmit = e => {
    e.preventDefault();
    login({ variables: { ...fields } });
    setFields({ username: '', password: '' });
  };

  return (
    <div className='w-80 mx-auto text-gray-100'>
      <h1 className='text-center text-3xl'>Chatty</h1>
      <form
        className='flex flex-col bg-gray-100 rounded-md p-4 relative pb-8 mt-10'
        autoComplete='off'
        onSubmit={onLoginSubmit}
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
          id='password'
          type='password'
          placeholder={errors.password ?? 'Password'}
          value={fields.password}
          onChange={e => setFields({ ...fields, password: e.target.value })}
          error={errors.password}
        >
          <BiLockAlt />
        </InputField>
        <button
          type='submit'
          className='bg-gradient-to-r from-red-500 to-yellow-500 w-52 uppercase 
          text-sm py-2 absolute -bottom-4 left-0 right-0 mx-auto rounded shadow-xl'
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>
      <p className='my-10 text-sm text-center'>
        Don't have an account? <Link to='/register'>Register</Link>
      </p>
    </div>
  );
};

const LOGIN = gql`
  query login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
    }
  }
`;

export default Login;
