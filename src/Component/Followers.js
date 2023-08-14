import React from 'react';
import './Followers.css'; 


const fakeFollowers = [
  { id: 1, name: 'Sachin Tendulkar', email: 'sachin@gmail.com' },
  { id: 2, name: 'Virat Kohli', email: 'virat@gmail.com' },
  { id: 3, name: 'Shane Warne', email: 'shane@gmail.com' },
 
];

function Followers() {
  return (
    <div className="followers-container">
      {fakeFollowers.map(follower => (
        <div key={follower.id} className="follower-item">
          <div className="serial-number">{follower.id}</div>
          <i class="fa fa-user fa-lg"></i>
          <div className="follower-details">
            <div className="name">{follower.name}</div>
            <div className="email">{follower.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Followers;
