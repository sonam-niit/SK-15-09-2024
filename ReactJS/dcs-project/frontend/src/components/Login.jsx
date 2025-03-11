function Login() {
    return (
        <form className="container">
            <h3 className="text-center p-2">Login Form</h3>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Enter your Password"/>
            </div>
            <button type="submit" className="mb-3 btn btn-primary w-100">Register</button>
        </form>
    );
}

export default Login;