import { useContext } from "react";
import { UserContext } from "./UserContext";

function Login() {
    const { loggedIn, login } = useContext(UserContext);
    return (
        <div>
            {loggedIn ?
                <h3>Welcome to your Dashboard</h3>
                : <button onClick={login}>Login</button>
        }
        </div>
    );
}

export default Login;