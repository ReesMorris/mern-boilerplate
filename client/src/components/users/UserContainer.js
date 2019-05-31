import React from 'react';

const UserContainer = ({ user: { name, username, email } }) => {
  return (
    <div className='user'>
      <div>
        <span className='name'>{name}</span>
        <span className='username'>@{username}</span>
      </div>
      <div>
        <span className='email'>{email}</span>
      </div>
    </div>
  );
};

export default UserContainer;
