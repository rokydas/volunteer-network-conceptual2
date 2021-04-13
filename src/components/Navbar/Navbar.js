import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand ms-5" href="/"><img width="150px" src={logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="/">Donation</a>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="nav-link active" aria-current="page" to="/myEvents">My Events</Link>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="/">Blog</a>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="nav-link active" aria-current="page" to="/login"><button className="btn btn-primary">Login</button></Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="nav-link active" aria-current="page" to="/allEvents"><button className="btn btn-success">Admin</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;