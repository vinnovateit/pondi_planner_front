import React, { Fragment } from "react";
import "./Testi.css";

// COMPONENTS
import testi_img from "../../assets/testi.jpeg";
import Footer from "../footer/Footer";

const Testi = () => {
    return (
        <Fragment>
            <div className="testimonial_frame">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mt-5 ">
                            <div className="row ">
                                <div className="col-12 text-center p-3 question_landing">
                                    Why go to{" "}
                                    <span class="question_landing_special">
                                        {" "}
                                        pondicherry{" "}
                                    </span>
                                    ?
                                </div>
                            </div>
                            <div className="row img_for_testi_box">
                                <img
                                    src={testi_img}
                                    className="testi_image"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-8 content_for_testi_box">
                            <h1

                                class="find_your_why_heading mt-4"
                                style={{ color: "red" }}
                            >
                                Find your
                                <span style={{ color: "pink" }}>
                                    {" "}
                                    why? 💗
                                </span>
                            </h1>

                            <button
                                type="button"
                                className="btn btn-outline-light landing_page_button mt-1"
                            >
                                W a t c h
                            </button>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </Fragment>
    );
};

export default Testi;
