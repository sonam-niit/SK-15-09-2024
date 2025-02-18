import { useState } from "react";

function Login() {
    const [uname, setUname] = useState(''); //initial value empty string
    const [password, setPassword] = useState('');
    const handler = () => {
        if (!uname || !password) {
            alert('Fields cannot be empty');
        } else {
            if (uname == 'admin' && password == 'admin123') {
                alert('Logged In successfully');
                setUname(''); setPassword('');
            } else
                alert('Invalid Credentials')
        }
    }
    return (
        <div>
            <h3>Login Page</h3>
            <input type='text' placeholder="Enter UserName"
                onChange={(e) => setUname(e.target.value)} value={uname} />
            <br /><br />
            <input type='password' placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)} value={password}/>
            <br /><br />
            <button onClick={handler}>Login</button>
        </div>
    );
}

export default Login;