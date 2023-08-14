import React from 'react';
import './Topics.css'; // Import your CSS file for styling


const fakeTopics = [
  { id: 1, title: 'Coding' },
  { id: 2, title: 'Health' },
  { id: 3, title: 'Movies' },
  { id: 4, title: 'Finance' },
  { id: 5, title: 'Cricket' },
  { id: 6, title: 'Movies' },
  { id: 7, title: 'Software Development' }

];

function Topics() {
  return (
    <>
    <h2 className='fontsize'>Recommended Topics</h2>
    <div className="topic-list">
      
      {fakeTopics.map(topic => (
        <div key={topic.id} className="topic-item">
          {topic.title}
        </div>
      ))}
    </div>
    </>
  );
}

export default Topics;
