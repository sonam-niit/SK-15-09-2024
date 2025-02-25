import { useContext } from "react";
import { UserContext } from "./UserContext";

function Header() {
    const {loggedIn,logout}=useContext(UserContext);
    return ( 
        <div>
            {loggedIn? 
                <button onClick={logout}>Logout</button>
                : <p>Please Login From the Login Form</p>
            }
        </div>
     );
}

export default Header;