import { useEffect, useState } from 'react';
import { fetchPost, fetchComments, fetchUser } from '../api';
import { useParams } from 'react-router-dom';

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchPost(id).then(post => {
      setPost(post);
      fetchUser(post.userId).then(setUser);
    });
    fetchComments(id).then(setComments);
  }, [id]);

  if (!post || !user) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <hr />
      <h5>User: {user.name} ({user.email})</h5>
      <hr />
      <h5>Comments:</h5>
      {comments.map(c => (
        <div key={c.id} className="mb-3">
          <strong>{c.name}</strong>
          <p>{c.body}</p>
        </div>
      ))}
    </div>
  );
}
