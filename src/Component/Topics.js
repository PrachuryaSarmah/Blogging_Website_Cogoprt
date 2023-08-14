// import React from 'react';
// import './Topics.css'; 
// import { useNavigate } from 'react-router-dom';

// const fakeTopics = [
//   { id: 1, title: 'Coding' },
//   { id: 2, title: 'Health' },
//   { id: 3, title: 'Movies' },
//   { id: 4, title: 'Finance' },
//   { id: 5, title: 'Cricket' },
//   { id: 6, title: 'Movies' },
//   { id: 7, title: 'Software Development' }

// ];
// function Topics() {
//   const navigate = useNavigate();

//   const handleTopicClick = (title) => {
//     // Navigate to the specific topic page based on the slug
//     navigate(`/${title}`);
//   };

// function Topics() {
//   return (
//     <>
//     <h2 className='fontsize'>Recommended Topics</h2>
//     <div className="topic-list">
      
//       {fakeTopics.map(topic => (
//         <div key={topic.id} className="topic-item" onClick={handleTopicClick}>
//           {topic.title}
//         </div>
//       ))}
//     </div>
//     </>
//   );
// }

// export default Topics;


// import React from 'react';
// import './Topics.css'; 
// import { useNavigate } from 'react-router-dom';

// const fakeTopics = [
//   { id: 1, title: 'Movies', slug: 'movies' },
//   { id: 2, title: 'Coding', slug: 'coding' },
//   { id: 3, title: 'Health', slug: 'health' },
//   { id: 4, title: 'Finance', slug: 'finance' },
//   { id: 5, title: 'Cricket', slug: 'cricket' },
// ];

// function Topics() {
//   const navigate = useNavigate();

//   const handleTopicClick = (slug) => {
//     // Navigate to the specific topic page based on the slug
//     navigate(`/${slug}`);
//   };
  
//   return (
    
    
//     <div className="topic-list">
//       <h2 className='fontsize'>Recommended Topics</h2>
//       {fakeTopics.map(topic => (
//         <div
//           key={topic.id}
//           className="topic-item"
//           onClick={() => handleTopicClick(topic.slug)}
//         >
//           {topic.title}
//         </div>
//       ))}
//     </div>
    
    
    
//   );    
// }

// export default Topics;




import React from 'react';
import './Topics.css'; 
import { useNavigate } from 'react-router-dom';

const fakeTopics = [
  { id: 1, title: 'Movies', slug: 'movies' },
  { id: 2, title: 'Coding', slug: 'coding' },
  { id: 3, title: 'Cricket', slug: 'cricket' },
  { id: 4, title: 'Technology', slug: 'technology' },
];

function Topics() {
  const navigate = useNavigate();

  const handleTopicClick = (slug) => {
    // Navigate to the specific topic page based on the slug
    navigate(`/${slug}`);
  };
  
  return (
    <>
    <h2 className='fontsize'>Recommended Topics</h2>
    <div className="topic-list">
      {fakeTopics.map(topic => (
        <div
          key={topic.id}
          className="topic-item"
          onClick={() => handleTopicClick(topic.slug)}
        >
          {topic.title}
        </div>
      ))}
    </div>
    </>
  );    
}

export default Topics;
