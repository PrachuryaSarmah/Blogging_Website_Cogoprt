
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MyProfile.css';
import MyPost from './MyPost';
import axios from 'axios';

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [aboutText, setAboutText] = useState('');
  const [authorDetails, setAuthorDetails] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');

  const jwtToken = localStorage.getItem('jwtToken');
  const headers = {
    'authToken': jwtToken
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/author/my/details', { headers })
      .then((response) => {
        setAuthorDetails(response.data);
        setAboutText(response.data.about || '');
      })
      .catch((error) => {
        console.error('Error fetching author details:', error);
      });

    // Retrieve selected payment plan from local storage
    const planId = localStorage.getItem('selectedPlan');
    setSelectedPlan(planId);
  }, []);

  const handleAboutSubmit = () => {
    const updatedAuthorDetails = {
      ...authorDetails,
      about: aboutText
    };

    axios.put('http://127.0.0.1:3000/authors/edit', updatedAuthorDetails, { headers })
      .then((response) => {
        console.log(response.data);
        setAuthorDetails(updatedAuthorDetails);
        setAboutText('');
      })
      .catch((error) => {
        console.error('Error updating author details:', error);
      });
  };

  return (
    <div className="author-profile">
      <div className="author-header">
        <h2>Welcome to your Profile!</h2>
        <div className="author-tabs">
          <button
            className={activeTab === 'home' ? 'active' : ''}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button
            className={activeTab === 'about' ? 'active' : ''}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
        </div>
      </div>
      <div className="author-content">
        {activeTab === 'home' ? (
          <MyPost />
        ) : (
          <div>
            <div className="author-section">
              <h1>Number Of Followers: {authorDetails.followers_count}</h1>
              <h1>Email: {authorDetails.email}</h1>
              <p>{authorDetails.about || 'No Bio Added'}</p>
              <p>Selected Payment Plan: {selectedPlan}</p> {/* Display selected payment plan */}
            </div>
            <div>
              <textarea
                value={aboutText}
                onChange={(e) => setAboutText(e.target.value)}
                placeholder="Update About..."
              />
              <button onClick={handleAboutSubmit}>Update About</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;

