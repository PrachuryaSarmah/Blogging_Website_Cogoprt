import React, { useState, useEffect } from 'react';
import './Movies.css';
import Moviesb from './Moviesb';
import { Link } from 'react-router-dom';


const Movies = () => {
  const article = {
    title: "Ask Ethan: Which Movies Get The Science Of Time Travel Right?",
    authorName: "Suresh Singh",
    heading: "It’s one of the most common tropes in science fiction. But which movies actually get the science right?",
    content: `The way we travel through time, at a speed of one second per second, is so boring that we take it for absolute granted. Yet according to Einstein’s theory of relativity, we can not only travel forward through time at different rates by accelerating close to the speed of light, we could potentially travel either forwards or backwards by constructing a bridge through two disconnected locations in spacetime. Time travel, either forwards or backwards, has long been a staple of our imaginations and our stories`,
  };

  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    const wordsPerMinute = 200;
    const wordCount = article.content.split(/\s+/).length;
    const readingTimeInMinutes = wordCount / wordsPerMinute;
    setReadingTime(Math.ceil(readingTimeInMinutes));
  }, [article]);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleComment = () => {
    if (newComment.trim() !== '') {
      const newComments = [...comments, newComment];
      setComments(newComments);
      setNewComment('');
    }
  };

 

  return (
    <div>
      <div className="article-container">
        <div className="article-box">
          <h1 className="article-title">{article.title}</h1>
          <div className="article-meta">
            <span className="author-name">{article.authorName}</span>
            <span className="reading-time">{`${readingTime} min read`}</span>
          </div>
          <h2 className="article-heading">{article.heading}</h2>
          <p className="article-content">{article.content}</p>
          <div className="article-actions">
            <button
              className={`like-button ${isLiked ? 'liked' : ''}`}
              onClick={handleLike}
            >
              {isLiked ? 'Liked' : 'Like'}
            </button>
            <div className="comment-section">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
              />
              <button className="comment-button" onClick={handleComment}>
                Comment
              </button>
              {comments.length > 0 && (
                <div className="comment-list">
                  <div className="comment">{comments[comments.length - 1]}</div>
                </div>
              )}
            </div>
            
          </div>
          <div className="read-further-button-container">
          <Link to="/userarticle" className="read-further-button">
              Read more
            </Link>
          </div>
        </div>
      </div>
        <Moviesb/>
    </div>
  );
};

export default Movies;