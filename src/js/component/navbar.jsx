import React from "react";


const Navbar = () => {
    return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark  navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
                        <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon text-white"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                                <a className="nav-link text-light" href="#">About</a>
                                <a className="nav-link text-light" href="#">Services</a>
                                <a className="nav-link text-light">Contact</a>
                            </div>
                        </div>
                    </div>
                </nav>
         </div>);
         };

         export default Navbar;