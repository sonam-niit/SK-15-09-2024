import { Link } from "react-router-dom"
function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="">
                    <img src="https://banner2.cleanpng.com/20180623/hcw/aazusvhhn.webp"
                     alt="Shooping" height="80" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <Link className="btn btn-success" to="login">Login</Link>
                        <Link className="btn btn-primary ms-2" to="register">Register</Link>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Header;