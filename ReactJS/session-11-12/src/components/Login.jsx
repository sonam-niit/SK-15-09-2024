import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({setLoggedIn}) {

    //Create State to store all user Details
    const [user, setUser] = useState({ username: '', password: '' })
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        const validationErrors = {}
        e.preventDefault(); //to stop default propogation

        if (!user.username) {
            validationErrors.username = "UserName cannot be Empty"
        }
        if (!user.password) {
            validationErrors.password = "Password cannot be Empty"
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        } else {
            setErrors({});
            if (user.username == 'admin' && user.password == 'admin123') {
                alert('LoggedIN Successfully')
                setLoggedIn(true);
                navigate('/dashboard')
            }else{
                alert('Envalid Credentials Try Again..!!')
            }
        }

    }
    return (
        <div className="container">
            <h3 className="text-center p-2 text-bg-warning my-3">Login Form</h3>
            <form onSubmit={handlesubmit} noValidate>

                <div className="mb-3">
                    <label className="form-label">UserName</label>
                    <input type="text" className={`form-control ${errors.username ? 'is-invalid' : 'is-valid'}`}
                        placeholder="johndoe12"
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        value={user.username} />
                    {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className={`form-control ${errors.password ? 'is-invalid' : 'is-valid'}`}
                        placeholder="Enter Your Password"
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        value={user.password} />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <button type="submit" className="btn btn-primary w-100 my-3">Login</button>
            </form>
        </div>
    );
}

export default Login;