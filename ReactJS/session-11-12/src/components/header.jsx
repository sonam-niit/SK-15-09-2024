import { Link, useNavigate } from "react-router-dom";

function Header({loggedIn,setLoggedIn}) {
    const navigate= useNavigate();
    const logout=()=>{
        setLoggedIn(false);
        navigate('/login')
    }
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                {
                    loggedIn? <button className="nav-link" onClick={logout}>logout</button> :
                    <Link className="nav-link" to='login'>Login</Link>
                }
            </li>
            <li className="nav-item">
                <Link className="nav-link active"  to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='about'>About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="contact">Contact</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='products'>Products</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='register'>Register Form</Link>
            </li>
            
        </ul>
    );
}

export default Header;