import React from "react";
import logo from "../../assets/summer.png";
import "./Navbar.css";

const NavBar = () => {
    return (
        <div>
            <nav
                style={{ backgroundColor: "rgba(0,0,0,0.0001)" }}
                className="navbar navbar-expand-lg navbar-dark"
            >
                <a className="navbar-brand" href="#">
                    <img height="25px" width="25px" src={logo} alt="" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Book Now
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            Explore <sup><span className="badge ">PREMIUM</span></sup>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link disabled"
                                href="#"
                                tabindex="-1"
                                aria-disabled="true"
                            >
                                Coming Soon
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
