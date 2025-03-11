import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Register() {
    const [user,setUser]=useState({name:'',email:'',password:''});
    const navigate= useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            if(user.name=='' || user.email=='' || user.password=='' )
                alert("All fields are mandatory")
            else{
                user.id=Date.now()+""//create Unique Id and convert into String
                const resp=await axios.post('http://localhost:3000/users',user);
                if(resp.status==201){
                    alert('Registered Successfully');
                    navigate('/login'); //redirect to Login page
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form className="container" onSubmit={handleSubmit}>
            <h3 className="text-center p-2">Registration Form</h3>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Enter Your Name"
                value={user.name}
                onChange={(e)=>setUser({...user,name:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" placeholder="name@example.com"
                value={user.email}
                onChange={(e)=>setUser({...user,email:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Enter your Password"
                value={user.password}
                onChange={(e)=>setUser({...user,password:e.target.value})}/>
            </div>
            <button type="submit" className="mb-3 btn btn-primary w-100">Register</button>
        </form>
    );
}

export default Register;