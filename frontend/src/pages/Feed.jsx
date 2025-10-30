import React from 'react';
import './Feed.css';


function Feed() {
  const posts = [
    { id: 1, user: 'w', content: 'Meu primeiro post!' },
    { id: 2, user: 'dev123', content: 'React é top demais 🔥' },
  ];

  return (
    <div className="feed">
      <h2>Feed</h2>
      {posts.map(post => (
        <div key={post.id} className="post">
          <strong>@{post.user}</strong>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Feed;
