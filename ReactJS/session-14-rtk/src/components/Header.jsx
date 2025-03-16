import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
    //useSelector hook is used to read global state
    const count = useSelector(state => state.counter.count);
    const items = useSelector(state => state.cart.items)
    return (
        <div className="row">

            <h3 className="col">Counter Component:{count}</h3>
            <div className="col">
                <button type="button" className="btn btn-primary position-relative float-end">
                    Cart
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {items.length}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
            </div>
            <ul className="nav">
                <li className="nav-item">
                    <Link to='counter' className="nav-link">Counter Comp</Link>
                </li>
                <li className="nav-item">
                    <Link to='products' className="nav-link">Products</Link>
                </li>
                <li className="nav-item">
                    <Link to='cart' className="nav-link">Cart</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;