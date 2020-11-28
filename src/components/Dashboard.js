import React, { useContext } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import { AuthContextDispatch } from '../contexts/AuthProvider';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { AiOutlineUserAdd } from 'react-icons/ai';

const Dashboard = () => {
  const dispatch = useContext(AuthContextDispatch);

  const [logout, { loading }] = useLazyQuery(LOGOUT, {
    onError: e => console.log(e),
    onCompleted: _ => dispatch({ type: 'LOGOUT' }),
  });

  const onLogoutClick = e => {
    e.preventDefault();
    logout();
  };

  return (
    <div className='fixed bottom-0 h-16 w-full bg-gray-100 flex justify-around items-center text-2xl'>
      <button type='button'>
        <AiOutlineUserAdd className='text-red-500' />
      </button>
      <button type='button'>
        <FiSettings className='text-red-500' />
      </button>
      <button type='button' onClick={onLogoutClick} disabled={loading}>
        {loading ? 'Loading' : <FiLogOut className='text-red-500' />}
      </button>
    </div>
  );
};

const LOGOUT = gql`
  query logout {
    logout
  }
`;

export default Dashboard;
