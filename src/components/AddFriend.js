import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { gql, useMutation } from '@apollo/client';

const AddFriend = ({ showAddFr, setShowAddFr }) => {
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({});

  const [sendMessage, { loading }] = useMutation(SEND_MESSAGE, {
    onError: e => setErrors(e.graphQLErrors[0].extensions.errors),
    onCompleted: _ => setShowAddFr(false),
  });

  const addFriend = e => {
    e.preventDefault();
    sendMessage({ variables: { to: username } });
    setUsername('');
  };

  return (
    <div
      className={`absolute left-0 right-0 top-0 bottom-0 mx-auto my-auto w-72 h-48 shadow-2xl ${
        showAddFr ? '' : 'hidden'
      }`}
    >
      <FaTimes
        className='absolute z-10 text-2xl right-5 top-5 text-red-500 cursor-pointer'
        onClick={() => setShowAddFr(false)}
      />
      <form
        className='flex flex-col h-full bg-gray-100 rounded-md relative items-center justify-center px-20'
        autoComplete='off'
        onSubmit={addFriend}
      >
        <input
          id='username'
          className={`w-full bg-transparent ${
            errors.username && 'placeholder-red-500'
          }`}
          type='text'
          placeholder={errors.username ?? 'Enter username'}
          value={username}
          onChange={e => setUsername(e.target.value)}
          error={errors.username}
        />
        <button
          className='bg-gradient-to-r from-red-500 to-yellow-500 w-52 uppercase 
          text-sm py-2 absolute -bottom-4 left-0 right-0 mx-auto rounded shadow-xl text-gray-100'
          disabled={loading}
        >
          Add
        </button>
      </form>
    </div>
  );
};

const SEND_MESSAGE = gql`
  mutation sendMessage($to: String!) {
    sendMessage(to: $to, content: "")
  }
`;

export default AddFriend;
