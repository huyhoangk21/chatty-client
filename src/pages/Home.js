import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Dashboard from '../components/Dashboard';

const Home = () => {
  return (
    <div className='h-screen w-full relative bg-gray-100'>
      <Header />
      <Main />
      <Dashboard />
    </div>
  );
};

export default Home;
