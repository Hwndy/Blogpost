

import React, { useEffect, useState } from 'react';
import './BlogPost.css';  


const loadingImage = 'data:image/png;base64,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'
const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="blog-posts-container">
      {isLoading ? (
        <div className="loading-container">
          <img src={loadingImage} alt="Loading..." className="loading-image" />
          <p>Loading posts...</p>
        </div>
      ) : (
        <div>
          <h1>Blog Posts</h1>
          <ul className="posts-list">
            {posts.map((post) => (
              <li key={post.id} className="post-item">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BlogPosts;
