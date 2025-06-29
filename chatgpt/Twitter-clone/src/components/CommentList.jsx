// src/components/CommentList.jsx
export default function CommentList({ comments }) {
  return (
    <div className="mt-4">
      <h5>Comments</h5>
      {comments.map((comment) => (
        <div key={comment.id} className="card mb-2">
          <div className="card-body">
            <h6 className="card-title">{comment.name}</h6>
            <p className="card-text">{comment.body}</p>
            <small className="text-muted">By: {comment.email}</small>
          </div>
        </div>
      ))}
    </div>
  );
}
