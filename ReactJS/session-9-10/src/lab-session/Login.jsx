import { useContext, useState } from "react";
import users from '../assets/users.json';
import { ThemeContext } from "./ThemeContext";
function Login() {
    const {theme}=useContext(ThemeContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors,setErrors]=useState({})
    const handlesubmit = (e) => {
        e.preventDefault();
        if (validateData()) {
            let found = null;
            users.forEach(user => {
                if (user.email == email) {
                    found = user;
                }
            })
            if (found !== null) {
                if (found.password == password)
                    alert('Login Successfull')
                else
                    alert('Invalid Credentials')
            } else {
                alert('User is not registered with Us')
            }
        }else{
            return
        }
    }
    const validateData = () => {
        const validationErrors= {}
        const emailPattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const passwordPattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if(!email){
            validationErrors.email='Email cannot be Empty'
        }else if(!emailPattern.test(email)){
            validationErrors.email='invalid EmailID'
        }
        if(!password){
            validationErrors.password='Password cannot be Empty'
        }else if(!passwordPattern.test(password)){
            validationErrors.password='Your password must includes 1 special char, 1 caps letter and numeric values with 8 char long'
        }

        if(Object.keys(validationErrors).length>0){
            setErrors(validationErrors);
            return false;
        }else{
            setErrors({});
            return true;
        }
    }
    return (
        <div className={`container my-5`}>
            <h3 className="text-center p-2 mb-3">Login Form</h3>
            <form onSubmit={handlesubmit} noValidate>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className={`form-control ${errors.email?'is-invalid':'is-valid'}`} placeholder="name@example.com"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className={`form-control ${errors.password?'is-invalid':'is-valid'}`} 
                    placeholder="Enter Password"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <button type="submit" className="btn btn-warning w-100 mb-3">Login</button>
            </form>
        </div>
    );
}

export default Login;