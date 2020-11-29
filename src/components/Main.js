import React from 'react';
import AddFriend from './AddFriend';
const mockData = [
  {
    imageUrl:
      'https://bodylanguagecentral.com/wp-content/uploads/2019/10/mansmilingandstaring.jpg',
    username: 'John',
    latestMsg: "Hello it's me John. How are you?",
  },
  {
    imageUrl:
      'https://bodylanguagecentral.com/wp-content/uploads/2019/10/mansmilingandstaring.jpg',
    username: 'John',
    latestMsg: "Hello it's me John. How are you?",
  },
  {
    imageUrl:
      'https://bodylanguagecentral.com/wp-content/uploads/2019/10/mansmilingandstaring.jpg',
    username: 'John',
    latestMsg: "Hello it's me John. How are you?",
  },
  {
    imageUrl:
      'https://bodylanguagecentral.com/wp-content/uploads/2019/10/mansmilingandstaring.jpg',
    username: 'John',
    latestMsg: "Hello it's me John. How are you?",
  },
  {
    imageUrl:
      'https://bodylanguagecentral.com/wp-content/uploads/2019/10/mansmilingandstaring.jpg',
    username: 'John',
    latestMsg: "Hello it's me John. How are you?",
  },
  {
    imageUrl:
      'https://bodylanguagecentral.com/wp-content/uploads/2019/10/mansmilingandstaring.jpg',
    username: 'John',
    latestMsg: "Hello it's me John. How are you?",
  },
  {
    imageUrl:
      'https://bodylanguagecentral.com/wp-content/uploads/2019/10/mansmilingandstaring.jpg',
    username: 'John',
    latestMsg: "Hello it's me John. How are you?",
  },
  {
    imageUrl:
      'https://bodylanguagecentral.com/wp-content/uploads/2019/10/mansmilingandstaring.jpg',
    username: 'John',
    latestMsg: "Hello it's me John. How are you?",
  },
  {
    imageUrl:
      'https://bodylanguagecentral.com/wp-content/uploads/2019/10/mansmilingandstaring.jpg',
    username: 'John',
    latestMsg: "Hello it's me John. How are you?",
  },
  {
    imageUrl:
      'https://bodylanguagecentral.com/wp-content/uploads/2019/10/mansmilingandstaring.jpg',
    username: 'John',
    latestMsg: "Hello it's me John. How are you?",
  },
  {
    imageUrl:
      'https://bodylanguagecentral.com/wp-content/uploads/2019/10/mansmilingandstaring.jpg',
    username: 'John',
    latestMsg: "Hello it's me John. How are you?",
  },
  {
    imageUrl:
      'https://bodylanguagecentral.com/wp-content/uploads/2019/10/mansmilingandstaring.jpg',
    username: 'John',
    latestMsg: "Hello it's me John. How are you?",
  },
  {
    imageUrl:
      'https://bodylanguagecentral.com/wp-content/uploads/2019/10/mansmilingandstaring.jpg',
    username: 'John',
    latestMsg: "Hello it's me John. How are you?",
  },
];

const renderedFriends = mockData.map(
  ({ imageUrl, username, latestMsg }, idx) => (
    <div key={idx} className='flex my-2'>
      <img
        src={imageUrl}
        alt='user profile'
        className='w-10 h-10 rounded-full object-cover mr-4'
      />
      <div>
        <h6 className='text-lg font-semibold'>{username}</h6>
        <p className='text-sm text-gray-500'>{latestMsg}</p>
      </div>
    </div>
  )
);

const Main = () => {
  return (
    <div className='absolute top-16 bottom-16 px-4 w-full overflow-scroll'>
      {renderedFriends}
      {/* <AddFriend /> */}
    </div>
  );
};

export default Main;
