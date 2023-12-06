
import React from 'react';
import { Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartProvider';

export default function Navbar() {
    const { cart } = useCart();
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear the authentication token from local storage
        localStorage.removeItem('authToken');
        // Redirect to the home page
        navigate('/');
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">
                        Go Food
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="/navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            {localStorage.getItem('authToken') ? (
                                <li className="nav-item">
                                    <Link className="nav-link active fs-5" aria-current="page" to="/myorder">
                                        My Orders
                                    </Link>
                                </li>
                            ) : null}
                        </ul>
                        {!localStorage.getItem('authToken') ?
                            <div className="d-flex ms-auto">
                                <Link className="btn bg-white text-success mx-1" to="/login">
                                    Login
                                </Link>
                                <Link className="btn bg-white text-success mx-1" to="/createuser">
                                    Signup
                                </Link>
                            </div>
                            :
                            <div className="d-flex ms-auto">
                                <Link className="btn bg-white text-success mx-1" to="/cart">
                                    My Cart
                                    <Badge pill bg='danger'>{cart.length}</Badge>
                                </Link>
                                <div className="btn bg-white text-danger mx-1" onClick={handleLogout}>
                                    Logout
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
}

