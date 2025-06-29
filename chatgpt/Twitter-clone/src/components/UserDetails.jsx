// src/components/UserDetails.jsx
export default function UserDetails({ user }) {
  return (
    <div className="card my-4">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">@{user.username}</h6>
        <p className="card-text">
          <strong>Email:</strong> {user.email}<br />
          <strong>Phone:</strong> {user.phone}<br />
          <strong>Website:</strong> {user.website}<br />
          <strong>Company:</strong> {user.company?.name}<br />
          <strong>City:</strong> {user.address?.city}
        </p>
      </div>
    </div>
  );
}
