import React, { Fragment } from "react";
import "./Home.css";
import logo from "../../assets/summer.png";

const Home = () => {
    return (
        <Fragment>
            <div className="background_box">
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
                                    Home{" "}
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link disabled"
                                    href="#"
                                    tabindex="-1"
                                    aria-disabled="true"
                                >
                                    Disabled
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </Fragment>
    );
};

export default Home;
