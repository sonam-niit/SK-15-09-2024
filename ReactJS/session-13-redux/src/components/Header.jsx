import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const loggedIn = useSelector(state => state.userred.loggedIn)
    const dispatch= useDispatch();
    const navigate= useNavigate();
    const logout= ()=>{
        dispatch({type:'logout'});
        navigate('/login');
    }
    return (
        <div className="mb-3">
            {loggedIn ? <button className="btn btn-success" onClick={logout}>Logout</button> :
                <Link to='login' className="btn btn-success">Login</Link>}

            <Link to='counter' className="btn btn-primary ms-3">Counter</Link>
        </div>
    );
}

export default Header;