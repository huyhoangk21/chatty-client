import React, { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Dashboard from '../components/Dashboard';
import AddFriend from '../components/AddFriend';

const Home = () => {
  const [showAddFr, setShowAddFr] = useState(false);

  return (
    <div className='h-screen w-full relative bg-gray-100'>
      <Header />
      <Main />
      <Dashboard showAddFr={showAddFr} setShowAddFr={setShowAddFr} />
      <AddFriend showAddFr={showAddFr} setShowAddFr={setShowAddFr} />
    </div>
  );
};

export default Home;
