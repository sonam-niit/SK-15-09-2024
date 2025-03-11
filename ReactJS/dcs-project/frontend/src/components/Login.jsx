import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [user,setUser]=useState({email:'',password:''});
        const navigate= useNavigate();
        const handleSubmit=async(e)=>{
            e.preventDefault();
            try {
                if(user.email=='' || user.password=='' )
                    alert("All fields are mandatory")
                else{
                    const resp=await axios.get('http://localhost:3000/users');
                    const users=resp.data ; //users data coming from backend
                    const found=users.find(item=>item.email==user.email);
                    if(found){
                        if(found.password===user.password){
                            alert('Logged In Successfully');
                            navigate('/dash');
                        }else{
                            alert('Invalid Credentials Please Try Again..')
                        }
                    }else{
                        alert("EmailId is registered with Us Please Register First");
                        navigate('/register');
                    }
                        
                }
            } catch (error) {
                console.log(error)
            }
        }
    return (
        <form className="container" onSubmit={handleSubmit}>
            <h3 className="text-center p-2">Login Form</h3>
            
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

export default Login;