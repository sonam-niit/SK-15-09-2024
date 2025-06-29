import { useEffect, useState } from 'react';
import { fetchPosts } from '../api';
import { Link } from 'react-router-dom';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Latest Posts</h2>
      <div className="list-group">
        {posts.map(post => (
          <Link key={post.id} to={`/post/${post.id}`} className="list-group-item list-group-item-action">
            <h5>{post.title}</h5>
            <p>{post.body.slice(0, 60)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
