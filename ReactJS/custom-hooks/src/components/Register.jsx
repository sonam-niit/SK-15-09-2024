import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {

    //Create State to store all user Details
    const [user, setUser] = useState({ fullname: '', email: '', username: '', password: '' })
    const [errors, setErrors] = useState({});
    //Submit function (handler)
    const handlesubmit = (e) => {
        const validationErrors = {}
        const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //email Regex
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; //password Pattern
        e.preventDefault(); //to stop default propogation
        if (!user.fullname) {
            validationErrors.fullname = !user.fullname ? "Name cannot be Empty" : ''
        }
        if (!user.email) {
            validationErrors.email = "Email cannot be Empty"
        }
        else if (!emailPattern.test(user.email)) {
            validationErrors.email = "Invalid EmaiId"
        }
        if (!user.username) {
            validationErrors.username = "UserName cannot be Empty"
        }
        if (!user.password) {
            validationErrors.password = "Password cannot be Empty"
        }
        else if (!passwordPattern.test(user.password)) {
            validationErrors.password = "Your Email id must includes 1 Caps,1 special char and 8 char long"
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        } else {
            setErrors({});
            console.log(user);
            alert('Form Registered Successfully')
        }
        //You can make above code conciced using ternary example below
        /*
            validationErrors.fullname = !user.fullname ? "Name cannot be Empty" : ''
            validationErrors.email = !user.email? "Email cannot be Empty" : 
            (!emailPattern.test(user.email)?"Invalid EmaiId":"")
        */
    }
    return (
        <div className="offset-3 col-md-6">
            <h3 className="text-center p-2 text-bg-warning my-3">Registration Form</h3>
            <form onSubmit={handlesubmit} noValidate>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className={`form-control ${errors.fullname ? 'is-invalid' : 'is-valid'}`}
                        placeholder="John Doe" required
                        onChange={(e) => setUser({ ...user, fullname: e.target.value })}
                        value={user.fullname} />
                    {errors.fullname && <div className="invalid-feedback">{errors.fullname}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className={`form-control ${errors.email ? 'is-invalid' : 'is-valid'}`}
                        placeholder="john.doe@example.com"
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        value={user.email} />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
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
                <button type="submit" className="btn btn-primary w-100 my-3">Register</button>
            </form>
            <Link className="nav-link text-primary" to='/'>
                Already have account? Login Here
            </Link>
        </div>
    );
}

export default Register;