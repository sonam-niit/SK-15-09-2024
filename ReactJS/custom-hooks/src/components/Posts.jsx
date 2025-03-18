import useFetchData from "../hooks/useUsersData";
import Comments from "./Comments";
import Header from "./Header";

function Posts() {
    const posts = useFetchData('https://jsonplaceholder.typicode.com/posts');
    const users = useFetchData('https://jsonplaceholder.typicode.com/users');
    return (
        <div className='row'>
            <Header />
            <div className="offset-3 col-md-6">
                {
                    posts.map(post => (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <Comments postId={post.id} />
                            <hr />
                        </div>
                    ))
                }
            </div>
            
            <div className="col-md-3">
                <h3>Persons your should Follow</h3>
                {
                    users.map(user => (
                        <div key={user.id}>
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <hr />
                        </div>
                    ))
                }
            </div>


        </div>
    );
}

export default Posts;