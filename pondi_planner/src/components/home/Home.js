import React, { Fragment } from "react";
import "./Home.css";

// IMAGES
import landing_img from "../../assets/home_beach_no.png";
import landing_text from "../../assets/text.png";
import beer from "../../assets/beer.png";
import beverage from "../../assets/beverage.png";

// COMPONENTS
import NavBar from "../navbar/Navbar";
import Testi from "../testimonial/Testi";

// import CountUp from "react-countup";

const Home = () => {
    return (
        <Fragment>
            <div className="background_box">
                <NavBar></NavBar>
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 order-2 order-lg-1 landing_text_box">
                            <div className="row">
                                <div className="col-12">
                                    <img
                                        className="landing_text"
                                        src={landing_text}
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div className="row button_box d-md-none d-none d-lg-block ">
                                <div className="col-12 text-right">
                                    <button
                                        type="button"
                                        className="btn btn-outline-light landing_page_button"
                                    >
                                        Get this Party started.
                                    </button>
                                </div>
                            </div>
                            <div className="row button_box_mobile d-lg-none">
                                <div className="col-12 text-center">
                                    <button
                                        type="button"
                                        className="btn btn-outline-light landing_page_button_mobile"
                                    >
                                        Get this Party started.
                                    </button>
                                </div>
                                {/* <CountUp
                                    className="count_up_landing"
                                    start={0}
                                    end={63}
                                    duration={5.0}
                                    separator=" "
                                    delay={0}
                                    decimals={0}
                                    decimal=","
                                    prefix=""
                                    suffix=""
                                    onEnd={() => console.log("Ended! 👏")}
                                    onStart={() => console.log("Started! 💨")}
                                ></CountUp> */}

                                {/* <h2 className="text-center mx-3 pitch_landing_page">
                                    Make all your college fantasies come true.
                                    Pondicherry now just a click away.
                                </h2> */}
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2  landing_img_box">
                            <img
                                className="landing_img d-none d-sm-block"
                                src={landing_img}
                                alt="Landing_page_image"
                            />
                            <img
                                className="landing_img_mobile_beer d-block d-sm-none"
                                src={beverage}
                                alt="Landing_page_image"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* TESTIMONIAL */}
            <Testi></Testi>
        </Fragment>
    );
};

export default Home;
