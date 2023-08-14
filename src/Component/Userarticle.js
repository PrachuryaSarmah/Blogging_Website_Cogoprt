
import './Userarticle.css';
import React, { useState, useEffect } from 'react';


const Userarticle = () => {
  const article = {
    title: "The Science behind movies",
    authorName: "John Doe",
    heading: "Building Engaging User Interfaces",
    content: `The way we travel through time, at a speed of one second per second, is so boring that we take it for absolute granted. Yet according to Einstein’s theory of relativity, we can not only travel forward through time at different rates by accelerating close to the speed of light, we could potentially travel either forwards or backwards by constructing a bridge through two disconnected locations in spacetime. Time travel, either forwards or backwards, has long been a staple of our imaginations and our stories; who wouldn’t want to explore the unseeable future or go back in time to right a past wrong? But getting those stories to be scientifically accurate is another job entirely. Which movies do the best at that? That’s what Ernio Hernandez wants to know, as he asks:I’m admittedly a fan of time-travel movies (however they explain it). What movie makes the best case for using this plot device accurately?

    Let’s take a look at what makes a good time travel movie, and see how your favorites stack up.If your goal is scientific accuracy, we have to understand what traveling through time looks like. One of the most revolutionary things that Einstein’s relativity brought us was the notion that space and time aren’t separate, absolute entities, but that they’re inextricably linked. The Universe is made of a four-dimensional fabric known as spacetime, and all objects, particles, and radiation exist within it. This leads to an odd, not-necessarily-intuitive phenomenon: your motion through time is affected by your motion through space, and vice versa.`,
  };
  const [elapsedTime, setElapsedTime] = useState(0);
  const [tagInput, setTagInput] = useState('');
  const [savedTags, setSavedTags] = useState([]);

 
  const updateElapsedTime = () => {
    setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
  };

  useEffect(() => {
    
    const intervalId = setInterval(updateElapsedTime, 1000);

    
    return () => clearInterval(intervalId);
  }, []);

  
  const handleTagInputChange = (event) => {
    setTagInput(event.target.value);
  };

 
  const handleSaveTag = () => {
    if (tagInput.trim() !== '') {
      setSavedTags([...savedTags, tagInput.trim()]);
      setTagInput('');
    }
  };

  return (
    <div>
      <div className="article-container">
        <div className="article-box">
          <div className="timer-container">
            <span className="timer">{`${Math.floor(elapsedTime / 60)}:${elapsedTime % 60}`}</span>
          </div>
          <h1 className="article-title">{article.title}</h1>
          <div className="article-meta">
            <span className="author-name">{article.authorName}</span>
          </div>
          <h2 className="article-heading">{article.heading}</h2>
          <p className="article-content">{article.content}</p>
          
          <div className="tags-container">
            <input
              type="text"
              value={tagInput}
              onChange={handleTagInputChange}
              placeholder="Enter tags"
              className="tags-input"
            />
            <button onClick={handleSaveTag} className="tags-button">
              Save
            </button>
            <div className="saved-tags">
              {savedTags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userarticle;