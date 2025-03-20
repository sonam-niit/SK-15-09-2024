import useFetchData from "../hooks/useUsersData";

function Comments({ postId }) {
    const comments = useFetchData(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    return (
        <div>
            <h5>Comments</h5><hr />
            {
                comments.map(comment => (
                    <div key={comment.id}>
                        <h6>{comment.name}</h6>
                        <p>{comment.body}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Comments;