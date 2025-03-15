import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(username=='admin' && password=='admin123'){
            alert('Logged In..');
            dispatch({type:'login'}); //update the global state
            navigate('/dashboard'); 
        }else{
            alert('Invalid Credentials')
        }
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter UserName" 
            onChange={(e)=>setUsername(e.target.value)}/>
            <br/><br/>
            <input type="password" placeholder="Enter Password"
            onChange={(e)=>setPassword(e.target.value)} />
            <br/><br/>
            <button type="submit">Login</button>
        </form>
     );
}

export default Login;