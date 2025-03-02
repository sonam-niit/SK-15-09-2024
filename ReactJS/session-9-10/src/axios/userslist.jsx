import axios from "axios";
import { useEffect, useState } from "react";

function UsersList() {
    const [users, setUsers] = useState([]);
    const fetchData = async () => {
        try {
            const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
            // console.log(resp)
            setUsers(resp.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="container my-3">
            <h3>User's List</h3>
            {
                users.length == 0 ? (<div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>) :
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID</th><th>Name</th><th>Username</th><th>Email</th><th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.website}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            }

        </div>
    );
}

export default UsersList;