import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
    const [users, setUsers] = useState([]);
    const [input, setInput] = useState({ name: '', email: '', country: '' })
    const fetchData = async () => {
        try {
            const resp = await axios.get('http://localhost:3000/users');
            setUsers(resp.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    const handlesubmit=async(e)=>{
        e.preventDefault();
        try {
            input.id=Date.now()+""; //give unique number "" attaching to the number to convert it into string
            const resp= await axios.post('http://localhost:3000/users',input)
            if(resp.status==201){
                alert('User Registered Successfully');
                fetchData(); //to get updated data from server
                setInput({ name: '', email: '', country: '' }) //clean up form
            }
        } catch (error) {
            console.log(error)
        }
    }
    const deleteUser=async(id)=>{
        try {
            const resp= await axios.delete('http://localhost:3000/users/'+id)
            if(resp.status==200){
                alert('User Deleted Successfully');
                setUsers(users.filter(user=>user.id!=id)); //filter the deleted Data
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="container my-3">
            <h3>User's List</h3>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th><th>Name</th><th>Email</th><th>Country</th><th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.country}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>deleteUser(user.id)}>X</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <h3 className="my-3 text-center p-2 text-center-success">Register</h3>
            <form onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className='form-control'
                        placeholder="John Doe"
                        onChange={(e) => setInput({ ...input, name: e.target.value })}
                        value={input.name} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email Id</label>
                    <input type="email" className='form-control'
                        placeholder="example@gmail.com"
                        onChange={(e) => setInput({ ...input, email: e.target.value })}
                        value={input.email} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Country</label>
                    <input type="text" className='form-control'
                        placeholder="INDIA"
                        onChange={(e) => setInput({ ...input, country: e.target.value })}
                        value={input.country} />
                </div>
                <button type="submit" className="mb-3 btn btn-primary w-100">Register</button>
            </form>
        </div>
    );
}

export default Dashboard;