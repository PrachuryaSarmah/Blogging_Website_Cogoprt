import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PostList.css'
import axios from 'axios';

const PostList = ({ filter }) => {

  const [posts, setPosts] = useState([]);
  const [topPost, setTopPost] = useState([]);

  useEffect(() => {
    console.log(filter);
    
    axios.get('http://127.0.0.1:3000/get/topPosts')
    .then((response) => {
      
      const sortedPosts = response.data.sort((a, b) => b.likes - a.likes);
      
      const top3Posts = sortedPosts.slice(0, 3);
      setTopPost(top3Posts);
    })
    .catch((error) => {
      console.error('Error fetching top posts:', error);
    });




    if (filter.author != '') {
      console.log(filter.author);
      axios.get(`http://127.0.0.1:3000/get/post/author/${filter.author}`)
        .then((response) => {
          setPosts(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching posts:', error);

        });

    }
    else if (filter.date != '') {
      console.log('inside 2');
      axios.get(`http://127.0.0.1:3000/get/post/filter/date/${filter.date}`)
        .then((response) => {
          setPosts(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching posts:', error);

        });

    }
    else if (filter.sortby != '') {
      console.log('inside 2');
      axios.get(`http://127.0.0.1:3000/get/post/filter/likesAndComments/${filter.sortby}`)
        .then((response) => {
          setPosts(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching posts:', error);

        });

    }
    // 
    else if (filter.search != '') {
      axios.get(`http://localhost:3000/posts/search?search=${filter.search}`)
        .then((response) => {
          setPosts(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching posts:', error);

        });


    }
    else {
      console.log('inside 3');
      axios.get('http://127.0.0.1:3000/posts/all')
        .then((response) => {
          setPosts(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching posts:', error);

        });
    }

    if (topPost.length > 3) {
      topPost.splice(3, topPost.length - 3);
    }




  }, [filter]);

  return (
    <div>
      <div className='trend'>
        <h3>Top Posts</h3>
       
      </div>
      <div className='marginit'>
      {topPost.map((post) => (
        <div key={post.id} className="post">
          <div className="post-details">
            <h3>{post.title}</h3>
            <p>Topic: {post.topic}</p>
            <p>Author: {post.author_name}</p>
            <Link to={`/post/${post.id}`}>View Details</Link>
          </div>
          <img src={post.image} alt={post.title} />
        </div>
      ))}
      </div>
      <div className='postall'><h3>All Posts</h3></div>
      <div className='allp'>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-details">
            <h3>{post.title}</h3>
            <p>Topic: {post.topic}</p>
            <p>Author: {post.author_name}</p>
            <Link to={`/post/${post.id}`}>View Details</Link>
          </div>
          <img src={post.image} alt={post.title} />
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default PostList;
